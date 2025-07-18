import { useEffect, useState } from "react"

type dayData = {
    value: number;
    day: string;
    fake: boolean;
}

export function Heatmap(
) {
    let y = new Date()
    y.setDate(y.getDate() + 1)
    const [endDate] = useState(y)
    let x = new Date(endDate)
    x.setFullYear(endDate.getFullYear() - 1)
    x.setDate(1)
    //
    const [startDate] = useState(x)

    const [something, setData] = useState<dayData[][][]>([])

    useEffect(() => {
        if (endDate && startDate) {

            let curr = new Date(startDate);
            let currMonth = curr.getMonth()
            let week: dayData[] = []
            let currWeekDay = curr.getDay()
            let monthData: (typeof week)[] = []

            let newData: (typeof monthData)[] = []

            for (let i = 0; i < currWeekDay; i++) {
                week.push({ value: 0, day: curr.toLocaleDateString(), fake: true })
            }

            while (
                curr.getDate() != endDate.getDate() ||
                curr.getMonth() !== endDate.getMonth() ||
                curr.getFullYear() !== endDate.getFullYear()
            ) {
                week.push({ value: 0, day: curr.toISOString(), fake: false })
                curr.setDate(curr.getDate() + 1);
                currWeekDay = curr.getDay()
                if (curr.getDay() === 0) {
                    monthData.push(week)
                    week = [];

                }
                if (currMonth != curr.getMonth()) {
                    currMonth = curr.getMonth()

                    monthData.push(week)
                    newData.push(monthData)
                    monthData = []
                    week = [];


                    for (let i = 0; i < currWeekDay; i++) {
                        week.push({ value: 0, day: curr.toLocaleDateString(), fake: true })
                    }

                }
            }

            if (week.length != 0) {
                monthData.push(week)
            }

            if (monthData.length != 0) {
                newData.push(monthData)
            }
            console.log(newData)

            setData(newData)
        }
    }, [endDate, startDate])

    return (
        <div>
            <div

                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: 20,
                }}
            >
                {something.map((month, monthIdx) => {
                    return (
                        <div
                            key={`month-${monthIdx}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: 20,
                                columnGap: 20,

                                //border: '1px solid blue',
                            }}
                        >

                            {new Date(month[0][0].day).toLocaleString('default', { month: 'short' })}




                            <div

                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    columnGap: 5,

                                    //border: '1px solid blue',
                                }}
                            >
                                {month.map((week, weekIdx) => {
                                    return (
                                        <div
                                            key={`month-${monthIdx}-week${weekIdx}`}
                                            style={{

                                                //border: '1px solid black',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                rowGap: 5,
                                            }}
                                        >


                                            {week.map((a, dayIdx) => {
                                                void a
                                                return <div

                                                    key={`month-${monthIdx}-week${weekIdx}-day${dayIdx}`}
                                                    style={{
                                                        backgroundColor: a.fake ? '' : 'white',
                                                        width: 5,
                                                        height: 5,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                    }}

                                                ></div>
                                            })}

                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}
