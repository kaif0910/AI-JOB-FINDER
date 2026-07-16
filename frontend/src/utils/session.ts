export function getSessionId(){

    let id = sessionStorage.getItem(
        "career-session"
    );

    if(!id){
        id = crypto.randomUUID();

        sessionStorage.setItem(
            "career-session",
            id
        );
    }

    return id ;
}