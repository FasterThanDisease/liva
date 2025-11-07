
export const CreateIntent = async (body) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/createintent`, {
            headers: {
                "Content-type": "application/json",
                "ID": "BIBO",
                "Authorization": "SPX JXStncq0",
                "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
            },
            method: `POST`, body: JSON.stringify(body)
        })
        if (!res.ok) {
            throw new Error(`Fehler beim starten des CreateIntents: ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        // Fehlerbehandlung
        console.error("Fehler beim starten des CreateIntents:", error);
        throw error;
    }
}



export const register = async (body) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customers/register`, {
            headers: {
                "Content-type": "application/json",
                "ID": "BIBO",
                "Authorization": "SPX JXStncq0",
                "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
            },
            method: `POST`, body: JSON.stringify(body)
        })
        if (!res.ok) {
            throw new Error(`Fehler beim starten des CreateIntents: ${res.statusText}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        // Fehlerbehandlung
        console.error("Fehler beim starten des CreateIntents:", error);
        throw error;
    }
}

