from langgraph.graph import StateGraph, START, END

from graph.state import AgentState

from graph.nodes import(
    resume_node,
    jobs_node,
    analysis_node,
    report_node
)

graph = StateGraph(AgentState)    # it tells the langgraph what data is allowed to flow between the nodes , declaration of the shared memory schema for the entire workflow

graph.add_node(
    "resume",
    resume_node
)

graph.add_node(
    "jobs",
    jobs_node
)

graph.add_node(
    "analysis",
    analysis_node
)

graph.add_node(
    "report",
    report_node
)


graph.add_edge(
    START,
    "resume"
)

graph.add_edge(
    "resume",
    "jobs"
)

graph.add_edge(
    "jobs",
    "analysis"
)

graph.add_edge(
    "analysis",
    "report"
)

graph.add_edge(
    "report",
    END
)

workflow = graph.compile()