import urllib.request, urllib.error, json, sys

def request(method, path, payload=None):
    url = 'http://127.0.0.1:8000' + path
    data = None
    headers = {'Content-Type': 'application/json'}
    if payload is not None:
        data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            body = resp.read().decode('utf-8')
            print(path, resp.status, body)
    except urllib.error.HTTPError as e:
        try:
            body = e.read().decode('utf-8')
        except Exception:
            body = '<no-body>'
        print(path, 'HTTPError', e.code, body)
    except Exception as e:
        print(path, 'ERROR', repr(e))

if __name__ == '__main__':
    request('GET', '/api/health')
    request('GET', '/state')
    request('POST', '/auth/commander/login', {'email': 'commander@royalshepherd.com', 'password': 'royalshepherd2026'})
    request('POST', '/applications/app_test/approve')
    request('POST', '/companies', {'companyId': '10', 'name': 'Test Co', 'active': [], 'inactive': [], 'officers': [], 'anchor': [], 'junior': [], 'intermediate': [], 'senior': [], 'officer': [], 'totalMembers': 0, 'totalNcos': 0, 'totalOfficers': 0, 'members': []})
    request('POST', '/api/state', {'founderStory': 'Updated via test'})
    print('done')
