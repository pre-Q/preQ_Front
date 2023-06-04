// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/radar
import { ResponsiveRadar } from '@nivo/radar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const RadarChart = () => {

    const data = [
        {
            "skill": "열정",
            "value": 25,
        },
        {
            "skill": "협동",
            "value": 117,
        },
        {
            "skill": "도전정신",
            "value": 88,
        },
        {
            "skill": "문제해결",
            "value": 111,
        },
        {
            "skill": "전문성",
            "value": 40,
        }
    ]

    return (
        <div style={{ width: '500px', height: '300px', margin: '0 auto' }}>
            <ResponsiveRadar
                data={data}
                keys={['value']}
                indexBy="skill"
                valueFormat=">-.2f"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                // borderColor={{ from: 'color' }}
                borderColor="blue"
                gridLabelOffset={36}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                // colors={{ scheme: 'nivo' }}
                colors="blue"
                blendMode="multiply"
                motionConfig="wobbly"
            // legends={[
            //     {
            //         anchor: 'top-left',
            //         direction: 'column',
            //         translateX: -50,
            //         translateY: -40,
            //         itemWidth: 80,
            //         itemHeight: 20,
            //         itemTextColor: '#999',
            //         symbolSize: 12,
            //         symbolShape: 'circle',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemTextColor: '#000'
            //                 }
            //             }
            //         ]
            //     }
            // ]}
            />
        </div>
    );
}

export default RadarChart;