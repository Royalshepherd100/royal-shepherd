import subprocess
import urllib.request
import urllib.error

WORKDIR = r'C:\Users\HP\Documents\royal shepherd'


def git(cmd):
    return subprocess.check_output(cmd, cwd=WORKDIR, text=True).strip()


def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Copilot'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.getcode(), resp.geturl(), resp.read().decode('utf-8', errors='replace')


if __name__ == '__main__':
    print('LOCAL_COMMIT', git(['git', 'rev-parse', 'gh-pages']))
    print('LIVE_COMMIT', git(['git', 'rev-parse', 'live/gh-pages']))
    print('REMOTE_HEAD', subprocess.check_output(['git', 'ls-remote', 'live', 'refs/heads/gh-pages'], cwd=WORKDIR, text=True).strip())

    for url in [
        'https://royalshepherd100.github.io/royal-shepherd/',
        'https://royalshepherd100.github.io/royal-shepherd/index.html',
    ]:
        try:
            code, final, body = fetch(url)
            print('URL', url)
            print('STATUS', code)
            print('FINAL', final)
            print('MATCH_APP_V11', 'app.v11.js' in body)
            print('MATCH_APP_JS', 'app.js' in body)
            print('MATCH_BACKEND_BAC1', 'royal-shepherd-bac1' in body)
            print('MATCH_BACKEND_LEGACY', 'royal-shepherd-backend' in body)
            for line in body.splitlines():
                if 'app.v11.js' in line or 'app.js' in line or 'RS_BACKEND_URL' in line or 'royal-shepherd-bac1' in line or 'royal-shepherd-backend' in line:
                    print(line)
            print('---')
        except urllib.error.HTTPError as exc:
            print('ERROR', url, exc.code, exc.reason)

    for url in [
        'https://royalshepherd100.github.io/royal-shepherd/app.v11.js',
        'https://raw.githubusercontent.com/Royalshepherd100/royal-shepherd/gh-pages/app.v11.js',
    ]:
        try:
            code, final, body = fetch(url)
            print('URL', url)
            print('STATUS', code)
            print('FINAL', final)
            print('LENGTH', len(body))
            print(body.splitlines()[:10])
        except urllib.error.HTTPError as exc:
            print('ERROR', url, exc.code, exc.reason)
