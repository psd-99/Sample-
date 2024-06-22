import type { ImagesResults } from "../Models/Images";
import { ImagesSchemaWithPhotos } from "../Models/Images";
// import env from "./env";

export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
    try {
        const res = await fetch(url, {
            headers: {
                Authorization: "4qjJGnst2Uyr64dBXm8ygio8xTHBwBA3pZTv5g0uGmpCKgo6PLkJJbpW"
            }
        });

        if (!res.ok) throw new Error("Fetch Images error\n");

        const imagesResults: ImagesResults = await res.json();

        // console.log(imagesResults);

        // Parse data with zod schema
        const parseData = ImagesSchemaWithPhotos.parse(imagesResults);

        if (parseData.total_results === 0) throw new Error("No images found");;

        return parseData;

    } catch (e) {
        // Will show in terminal console
        if (e instanceof Error) console.log(e.stack);
    }
}



