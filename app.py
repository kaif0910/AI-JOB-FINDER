from agent.runtime import AgentRuntime

from tools.resume import search_resume
from tools.jobs import search_jobs
from tools.report import save_report


tools = [
    search_resume,
    search_jobs,
    save_report
]

runtime = AgentRuntime(tools)

runtime.chat()