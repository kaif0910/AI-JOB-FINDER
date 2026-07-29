export function getSessionId(){

    let id = localStorage.getItem(
        "career-session"
    );

    if(!id){
        id = crypto.randomUUID();

        localStorage.setItem(
            "career-session",
            id
        );
    }

    return id ;
}