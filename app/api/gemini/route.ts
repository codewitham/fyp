import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const mainResponsePromise = 90 - 10;

        // Send progress responses asynchronously while the main response is being generated
        for (let index = 0; index < 100; index++) {
            // Simulate some processing time
            await new Promise(resolve => setTimeout(resolve, 100));

            // Send progress response
            NextResponse.json({ message: `progress: ${index}% `, status: 200 });
        }

        // Wait for the main response to finish generating
        const mainResponse = mainResponsePromise - 10;

        // Send the final response
        return NextResponse.json({ message: mainResponse, status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "server error", status: 500 })
    }
}