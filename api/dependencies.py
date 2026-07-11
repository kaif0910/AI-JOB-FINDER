from functools import lru_cache

from agent import CareerCopilot


@lru_cache
def get_agent():

    return CareerCopilot()