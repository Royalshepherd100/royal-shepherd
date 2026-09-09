import urllib.request

for path in ('/state', '/api/state', '/api/health'):
    url = 'http://127.0.0.1:8000' + path
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=5) as r:
            body = r.read().decode('utf-8', errors='replace')
            print(path, r.status)
            print(body[:200])
    except Exception as e:
        print(path, 'ERROR', e)
