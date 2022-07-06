import Image from "next/image"

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const description = data.properties.Description.rich_text[0].text.content
    const github = data.properties.Github.url
    const img = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end
    const isProcessing = data.properties.진행여부.status.name
    const notionDetailUrl = data.properties.SharedUrl.url

    const calculatedPeriod = (start, end) => {

        if (end != null){
            const startDateStringArray = start.split('-');
            const endDateStringArray = end.split('-');

            var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
            var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

            console.log(`startDate: ${startDate}`)
            console.log(`endDate: ${endDate}`)

            const diffInMs = Math.abs(endDate - startDate);
            const result = `${diffInMs / (1000 * 60 * 60 * 24)}일`;

            console.log(`기간 : ${result}`)
            return result;
        } else { return "진행중"; }

    };

    const process= (isProcessing) => {

        if (isProcessing === "In progress"){
            return <span className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"> {isProcessing} </span>
        } else if (isProcessing === "Done"){
            return <span className="px-2 py-1 mr-2 rounded-md bg-green-300 dark:bg-green-700 w-30"> {isProcessing} </span>
        } else {
            return <span className="px-2 py-1 mr-2 rounded-md bg-slate-400 dark:bg-slate-600 w-30"> {isProcessing} </span>
        }

    }

    const setTag = (aTag) => {

        // purple / green / blue / red / gray
        if(aTag.color === "purple"){
            return <h1 className="px-2 py-1 mr-2 rounded-md bg-purple-300 dark:bg-purple-700 w-30" key={aTag.id}>{aTag.name}</h1>
        } else if (aTag.color === "green"){
            return <h1 className="px-2 py-1 mr-2 rounded-md bg-green-300 dark:bg-green-700 w-30" key={aTag.id}>{aTag.name}</h1>
        } else if (aTag.color === "blue"){
            return <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
        } else if (aTag.color === "red"){
            return <h1 className="px-2 py-1 mr-2 rounded-md bg-red-400 dark:bg-red-700 w-30" key={aTag.id}>{aTag.name}</h1>
        } else if (aTag.color === "pink"){
            return <h1 className="px-2 py-1 mr-2 rounded-md bg-pink-400 dark:bg-pink-700 w-30" key={aTag.id}>{aTag.name}</h1>
        } else if(aTag.color === "gray"){
            return <h1 className="px-2 py-1 mr-2 rounded-md bg-gray-300 dark:bg-gray-700 w-30" key={aTag.id}>{aTag.name}</h1>
        }


    }
    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl"
                src={img}
                alt="cover image"
                width="100%"
                height="50%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h2 className="mt-4 text-xl">{description}</h2>
                <a href={github} className="text-lg">깃허브 바로가기</a>
                <a href={notionDetailUrl} className="text-lg">노션 상세페이지 바로가기</a>
                <p>
                    진행여부 : {process(isProcessing)}
                </p>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)})
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        setTag(aTag)
                    ))}
                </div>
            </div>
        </div>
     )
}