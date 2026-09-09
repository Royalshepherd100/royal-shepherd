import json
import urllib.request
import urllib.error

urls = [
    'https://api.github.com/repos/Royalshepherd100/royal-shepherd/pages',
    'https://api.github.com/repos/Royalshepherd100/royal-shepherd',
]
for url in urls:
    print('URL', url)
    req = urllib.request.Request(url, headers={'User-Agent': 'Copilot'})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.load(resp)
            print('STATUS', resp.status)
            print(json.dumps(data, indent=2)[:4000])
    except urllib.error.HTTPError as exc:
        print('HTTP ERROR', exc.code, exc.reason)
        try:
            body = exc.read().decode('utf-8', errors='replace')
            print(body[:4000])
        except Exception as e:
            print('BODY ERROR', type(e).__name__, e)
    except Exception as exc:
        print('ERROR', type(exc).__name__, exc)
