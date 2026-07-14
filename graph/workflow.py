from langgraph.graph import StateGraph, START, END

from graph.state import AgentState

from graph.nodes import(
    intent_node,
    resume_node,
    jobs_node,
    response_node
)

def intent_router(state: AgentState):

    """
    Decide the first node based on the detected intent.
    """

    intent = state["intent"]

    if intent == "resume":
        return "resume"

    if intent == "jobs":
        return "jobs"

    if intent == "compare":
        return "compare"

    return "response"



def resume_router(state: AgentState):

    """
    After retrieving resume context,
    decide whether we also need jobs.
    """

    if state["intent"] == "compare":
        return "jobs"

    return "response"


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
    "intent",
    intent_node
)

graph.add_node(
    "response",
    response_node
)


graph.add_edge(
    START,
    "intent"
)

# graph.add_edge(
#     "resume",
#     "jobs"
# )

# graph.add_edge(
#     "jobs",
#     "analysis"
# )

# graph.add_edge(
#     "analysis",
#     "report"
# )

# graph.add_edge(
#     "report",
#     END
# )


graph.add_conditional_edges(
    "intent",
    intent_router,
    {
        "resume": "resume",
        "jobs": "jobs",
        "compare": "resume",
        "response": "response",
    }
)


graph.add_conditional_edges(
    "resume",
    resume_router,
    {
        "jobs": "jobs",
        "response": "response"
    }
)


graph.add_edge(
    "jobs",
    "response"
)

graph.add_edge(
    "response",
    END
)

workflow = graph.compile()