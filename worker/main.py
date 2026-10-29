"""Fetches a JSON feed and renders a short text summary."""

import sys

import requests
from jinja2 import Template

SUMMARY = Template("{{ count }} items, first: {{ first }}")


def summarise(url: str) -> str:
    items = requests.get(url, timeout=10).json()
    return SUMMARY.render(count=len(items), first=items[0] if items else "none")


if __name__ == "__main__":
    print(summarise(sys.argv[1]))
