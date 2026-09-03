import subprocess
import urllib.request
import urllib.error
import hashlib

WORKDIR = r'C:\Users\HP\Documents\royal shepherd'


def git_bytes(cmd):
    return subprocess.check_output(cmd, cwd=WORKDIR)


def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Copilot'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.getcode(), resp.geturl(), resp.read()


def normalize_bytes(data):
    return data.replace(b'\r\n', b'\n').replace(b'\r', b'\n')


def hash_bytes(data):
    return hashlib.sha256(normalize_bytes(data)).hexdigest()


if __name__ == '__main__':
    local_index = git_bytes(['git', 'show', 'gh-pages:index.html'])
    local_app = git_bytes(['git', 'show', 'gh-pages:app.v11.js'])

    print('LOCAL_COMMIT', subprocess.check_output(['git', 'rev-parse', 'gh-pages'], cwd=WORKDIR, text=True).strip())
    print('LIVE_COMMIT', subprocess.check_output(['git', 'rev-parse', 'live/gh-pages'], cwd=WORKDIR, text=True).strip())
    print('REMOTE_HEAD', subprocess.check_output(['git', 'ls-remote', 'live', 'refs/heads/gh-pages'], cwd=WORKDIR, text=True).strip())
    print('LOCAL_INDEX_HASH', hash_bytes(local_index))
    print('LOCAL_APP_HASH', hash_bytes(local_app))

    urls = [
        'https://royalshepherd100.github.io/royal-shepherd/',
        'https://royalshepherd100.github.io/royal-shepherd/index.html',
        'https://royalshepherd100.github.io/royal-shepherd/app.v11.js',
    ]

    for url in urls:
        try:
            code, final, body = fetch(url)
            print('URL', url)
            print('STATUS', code)
            print('FINAL', final)
            print('HASH', hash_bytes(body))
            if url.endswith('index.html') or url.endswith('/'):
                text = body.decode('utf-8', errors='replace')
                print('INDEX_SNIPPET')
                print('\n'.join(text.splitlines()[:20]))
            if url.endswith('app.v11.js'):
                print('APP_SNIPPET')
                print('\n'.join(body.decode('utf-8', errors='replace').splitlines()[:20]))
        except urllib.error.HTTPError as exc:
            print('ERROR', url, exc.code, exc.reason)
        except Exception as exc:
            print('ERROR', url, type(exc).__name__, exc)
