"use server";

type LoginState = {
    success: true,
    statusCode: number,
    message: string,
    data: {
        accessToken: string,
        refreshToken: string
    }
} | {
    success: false,
    statusCode: number,
    message: string,
    name: string
}

export const loginAction = async (prevState: LoginState, formData: FormData) => {
    console.log(formData);
    console.log(prevState, "prev");

    const email = formData.get("email");
    const password = formData.get("password");

    const payload = {
        email,
        password
    }

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const result = await res.json();

    return result;
}