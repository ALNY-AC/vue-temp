export const a = {
    title: {
        text: '整体视力状况',
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
            ['product', '视力正常', '近视', '其他'],
            ['视力正常', 10000],
            ['近视', 6000],
            ['其他', 4000],
        ],
    },
    series: [
        { type: 'pie', label: { normal: { formatter: '{c}', position: 'inside' } }, }
    ],
    color: ['#2FBB72', '#EA5551', '#F6B447']
};
export const b = {
    title: {
        text: '视力状况年龄分布',
        textStyle: { color: '#01ADFF' },
    },
    dataset: {
        source: [
            ['product', '视力正常', '近视', '其他'],
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
    color: ['#2FBB72', '#EA5551', '#F6B447']
}