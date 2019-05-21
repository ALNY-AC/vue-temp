export const a = {
    title: {
        text: '整体屈光状况',
        textStyle: {
            color: '#01ADFF',
        },
        x: 'right',
    },
    legend: {
        y: '30%', orient: 'vertical', x: 'right', textStyle: { color: '#C3C9D0', },
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '正常', '过快', '过慢'],
            ['正常', 10000],
            ['过快', 6000],
            ['过慢', 4000],
        ],
    },
    series: [
        { type: 'pie', label: { normal: { formatter: '{c}', position: 'inside' } }, }
    ],
    color: ['#2FBB72', '#DC5252', '#4462A0']
};
export const b = {
    title: {
        text: '屈光状况年龄分布',
        textStyle: { color: '#01ADFF' },
    },
    dataset: {
        source: [
            ['product', '正常', '过快', '过慢'],
            ['3岁', 10000, 6000, 4000],
            ['4岁', 10000, 6000, 4000],
            ['5岁', 10000, 6000, 4000],
            ['6岁', 10000, 6000, 4000],
            ['7岁', 10000, 6000, 4000],
            ['≥8岁', 10000, 6000, 4000],
        ]
    },
    legend: {
        x: 'right',
        textStyle: { color: '#C3C9D0' },
    },
    tooltip: {},
    xAxis: {
        type: 'category',
        axisLine: { lineStyle: { color: "#C3C9D0" } },
    },
    yAxis: {
        axisLine: { lineStyle: { color: "#C3C9D0" } },
        splitLine: { show: false },
    },
    series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
    ],
    color: ['#2FBB72', '#DC5252', '#4462A0']
}