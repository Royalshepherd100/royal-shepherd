from backend import main
print([getattr(r, 'path', repr(r)) for r in main.app.routes])
