import { uglify } from 'rollup-plugin-uglify';


export default [
    {
        input: 'js/jquery.debouncedwidth.js',
        output: {
            name: 'min',
            file: 'js/jquery.debouncedwidth.min.js',
            format: 'umd'
        },
        plugins: [
            uglify()
        ],
        watch: {
            chokidar: {},
            exclude: ['node_modules/**']
        }
    },
];
