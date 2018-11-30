<template>
    <div :style="styles" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Col",
        props: {
            span: {
                type: [String, Number],
                default: 24,
            },
            order: {
                type: [String, Number],
            },
            offset: {
                type: [String, Number],
                default: 0,
            },
            push: {
                type: [String, Number],
                default: 0,
            },
            pull: {
                type: [String, Number],
                default: 0,
            },
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object],
            xl: [Number, Object],
        },
        computed: {
            classes: function () {
                let classList = [];
                ['span', 'offset', 'push', 'pull'].forEach(prop => {
                    classList.push(`iqy-col-${prop}-${this[prop]}`)
                });

                ['xs', 'sm', 'md', 'lg', 'xl'].forEach(prop => {
                    if(typeof this[prop] === 'number' ){
                        classList.push(`iqy-col-${prop}-span-${this[prop]}`)
                    }else if(typeof this[prop] === 'object'){
                        let obj = this[prop];
                        ['span', 'offset', 'push', 'pull'].forEach(key => {
                            classList.push(`iqy-col-${prop}-${key}-${obj[key]}`)
                        })
                    }
                });

                return classList;
            },
            styles: function () {
                let parent = this.$parent;
                while (parent && parent.$options.name !== 'Row') {
                    parent = parent.$parent;
                }
                let gutter = parent ? parent.gutter : 0;
                return {
                    paddingLeft: (gutter || 0) / 2 + 'px',
                    paddingRight: (gutter || 0) / 2 + 'px'
                }
            }
        }
    }
</script>

<style>
[class*=iqy-col-]{
    position: relative;
    float: left;
    box-sizing: border-box;
}
    .iqy-col-span-0{
        display: none;
        width: 0;
    }
    .iqy-col-span-1 {
        width: 4.16666667%;
    }

    .iqy-col-span-2 {
        width: 8.33333333%;
    }

    .iqy-col-span-3 {
        width: 12.5%;
    }

    .iqy-col-span-4 {
        width: 16.66666667%;
    }

    .iqy-col-span-5 {
        width: 20.83333333%;
    }

    .iqy-col-span-6 {
        width: 25%;
    }

    .iqy-col-span-7 {
        width: 29.16666667%;
    }

    .iqy-col-span-8 {
        width: 33.33333333%;
    }

    .iqy-col-span-9 {
        width: 37.5%;
    }

    .iqy-col-span-10 {
        width: 41.66666667%;
    }

    .iqy-col-span-11 {
        width: 45.83333333%;
    }

    .iqy-col-span-12 {
        width: 50%;
    }

    .iqy-col-span-13 {
        width: 54.16666667%;
    }

    .iqy-col-span-14 {
        width: 58.33333333%;
    }

    .iqy-col-span-15 {
        width: 62.5%;
    }

    .iqy-col-span-16 {
        width: 66.66666667%;
    }

    .iqy-col-span-17 {
        width: 70.83333333%;
    }

    .iqy-col-span-18 {
        width: 75%;
    }

    .iqy-col-span-19 {
        width: 79.16666667%;
    }

    .iqy-col-span-20 {
        width: 83.33333333%;
    }

    .iqy-col-span-21 {
        width: 87.5%;
    }

    .iqy-col-span-22 {
        width: 91.66666667%;
    }

    .iqy-col-span-23 {
        width: 95.83333333%;
    }

    .iqy-col-span-24 {
        width: 100%;
    }


    .iqy-col-offset-1 {
        margin-left: 4.16666667%;
    }

    .iqy-col-offset-2 {
        margin-left: 8.33333333%;
    }

    .iqy-col-offset-3 {
        margin-left: 12.5%;
    }

    .iqy-col-offset-4 {
        margin-left: 16.66666667%;
    }

    .iqy-col-offset-5 {
        margin-left: 20.83333333%;
    }

    .iqy-col-offset-6 {
        margin-left: 25%;
    }

    .iqy-col-offset-7 {
        margin-left: 29.16666667%;
    }

    .iqy-col-offset-8 {
        margin-left: 33.33333333%;
    }

    .iqy-col-offset-9 {
        margin-left: 37.5%;
    }

    .iqy-col-offset-10 {
        margin-left: 41.66666667%;
    }

    .iqy-col-offset-11 {
        margin-left: 45.83333333%;
    }

    .iqy-col-offset-12 {
        margin-left: 50%;
    }

    .iqy-col-offset-13 {
        margin-left: 54.16666667%;
    }

    .iqy-col-offset-14 {
        margin-left: 58.33333333%;
    }

    .iqy-col-offset-15 {
        margin-left: 62.5%;
    }

    .iqy-col-offset-16 {
        margin-left: 66.66666667%;
    }

    .iqy-col-offset-17 {
        margin-left: 70.83333333%;
    }

    .iqy-col-offset-18 {
        margin-left: 75%;
    }

    .iqy-col-offset-19 {
        margin-left: 79.16666667%;
    }

    .iqy-col-offset-20 {
        margin-left: 83.33333333%;
    }

    .iqy-col-offset-21 {
        margin-left: 87.5%;
    }

    .iqy-col-offset-22 {
        margin-left: 91.66666667%;
    }

    .iqy-col-offset-23 {
        margin-left: 95.83333333%;
    }

    .iqy-col-offset-24 {
        margin-left: 100%;
    }

    .iqy-col-pull-1 {
        right: 4.16666667%;
    }

    .iqy-col-pull-2 {
        right: 8.33333333%;
    }

    .iqy-col-pull-3 {
        right: 12.5%;
    }

    .iqy-col-pull-4 {
        right: 16.66666667%;
    }

    .iqy-col-pull-5 {
        right: 20.83333333%;
    }

    .iqy-col-pull-6 {
        right: 25%;
    }

    .iqy-col-pull-7 {
        right: 29.16666667%;
    }

    .iqy-col-pull-8 {
        right: 33.33333333%;
    }

    .iqy-col-pull-9 {
        right: 37.5%;
    }

    .iqy-col-pull-10 {
        right: 41.66666667%;
    }

    .iqy-col-pull-11 {
        right: 45.83333333%;
    }

    .iqy-col-pull-12 {
        right: 50%;
    }

    .iqy-col-pull-13 {
        right: 54.16666667%;
    }

    .iqy-col-pull-14 {
        right: 58.33333333%;
    }

    .iqy-col-pull-15 {
        right: 62.5%;
    }

    .iqy-col-pull-16 {
        right: 66.66666667%;
    }

    .iqy-col-pull-17 {
        right: 70.83333333%;
    }

    .iqy-col-pull-18 {
        right: 75%;
    }

    .iqy-col-pull-19 {
        right: 79.16666667%;
    }

    .iqy-col-pull-20 {
        right: 83.33333333%;
    }

    .iqy-col-pull-21 {
        right: 87.5%;
    }

    .iqy-col-pull-22 {
        right: 91.66666667%;
    }

    .iqy-col-pull-23 {
        right: 95.83333333%;
    }

    .iqy-col-pull-24 {
        right: 100%;
    }
    .iqy-col-push-1 {
        left: 4.16666667%;
    }

    .iqy-col-push-2 {
        left: 8.33333333%;
    }

    .iqy-col-push-3 {
        left: 12.5%;
    }

    .iqy-col-push-4 {
        left: 16.66666667%;
    }

    .iqy-col-push-5 {
        left: 20.83333333%;
    }

    .iqy-col-push-6 {
        left: 25%;
    }

    .iqy-col-push-7 {
        left: 29.16666667%;
    }

    .iqy-col-push-8 {
        left: 33.33333333%;
    }

    .iqy-col-push-9 {
        left: 37.5%;
    }

    .iqy-col-push-10 {
        left: 41.66666667%;
    }

    .iqy-col-push-11 {
        left: 45.83333333%;
    }

    .iqy-col-push-12 {
        left: 50%;
    }

    .iqy-col-push-13 {
        left: 54.16666667%;
    }

    .iqy-col-push-14 {
        left: 58.33333333%;
    }

    .iqy-col-push-15 {
        left: 62.5%;
    }

    .iqy-col-push-16 {
        left: 66.66666667%;
    }

    .iqy-col-push-17 {
        left: 70.83333333%;
    }

    .iqy-col-push-18 {
        left: 75%;
    }

    .iqy-col-push-19 {
        left: 79.16666667%;
    }

    .iqy-col-push-20 {
        left: 83.33333333%;
    }

    .iqy-col-push-21 {
        left: 87.5%;
    }

    .iqy-col-push-22 {
        left: 91.66666667%;
    }

    .iqy-col-push-23 {
        left: 95.83333333%;
    }

    .iqy-col-push-24 {
        left: 100%;
    }

   /* @media screen and (max-width: 768px){*/
        .iqy-col-xs-span-0{
            display: none;
            width: 0;
        }
        .iqy-col-xs-span-1 {
            width: 4.16666667%;
        }

        .iqy-col-xs-span-2 {
            width: 8.33333333%;
        }

        .iqy-col-xs-span-3 {
            width: 12.5%;
        }

        .iqy-col-xs-span-4 {
            width: 16.66666667%;
        }

        .iqy-col-xs-span-5 {
            width: 20.83333333%;
        }

        .iqy-col-xs-span-6 {
            width: 25%;
        }

        .iqy-col-xs-span-7 {
            width: 29.16666667%;
        }

        .iqy-col-xs-span-8 {
            width: 33.33333333%;
        }

        .iqy-col-xs-span-9 {
            width: 37.5%;
        }

        .iqy-col-xs-span-10 {
            width: 41.66666667%;
        }

        .iqy-col-xs-span-11 {
            width: 45.83333333%;
        }

        .iqy-col-xs-span-12 {
            width: 50%;
        }

        .iqy-col-xs-span-13 {
            width: 54.16666667%;
        }

        .iqy-col-xs-span-14 {
            width: 58.33333333%;
        }

        .iqy-col-xs-span-15 {
            width: 62.5%;
        }

        .iqy-col-xs-span-16 {
            width: 66.66666667%;
        }

        .iqy-col-xs-span-17 {
            width: 70.83333333%;
        }

        .iqy-col-xs-span-18 {
            width: 75%;
        }

        .iqy-col-xs-span-19 {
            width: 79.16666667%;
        }

        .iqy-col-xs-span-20 {
            width: 83.33333333%;
        }

        .iqy-col-xs-span-21 {
            width: 87.5%;
        }

        .iqy-col-xs-span-22 {
            width: 91.66666667%;
        }

        .iqy-col-xs-span-23 {
            width: 95.83333333%;
        }

        .iqy-col-xs-span-24 {
            width: 100%;
        }


        .iqy-col-xs-offset-1 {
            margin-left: 4.16666667%;
        }

        .iqy-col-xs-offset-2 {
            margin-left: 8.33333333%;
        }

        .iqy-col-xs-offset-3 {
            margin-left: 12.5%;
        }

        .iqy-col-xs-offset-4 {
            margin-left: 16.66666667%;
        }

        .iqy-col-xs-offset-5 {
            margin-left: 20.83333333%;
        }

        .iqy-col-xs-offset-6 {
            margin-left: 25%;
        }

        .iqy-col-xs-offset-7 {
            margin-left: 29.16666667%;
        }

        .iqy-col-xs-offset-8 {
            margin-left: 33.33333333%;
        }

        .iqy-col-xs-offset-9 {
            margin-left: 37.5%;
        }

        .iqy-col-xs-offset-10 {
            margin-left: 41.66666667%;
        }

        .iqy-col-xs-offset-11 {
            margin-left: 45.83333333%;
        }

        .iqy-col-xs-offset-12 {
            margin-left: 50%;
        }

        .iqy-col-xs-offset-13 {
            margin-left: 54.16666667%;
        }

        .iqy-col-xs-offset-14 {
            margin-left: 58.33333333%;
        }

        .iqy-col-xs-offset-15 {
            margin-left: 62.5%;
        }

        .iqy-col-xs-offset-16 {
            margin-left: 66.66666667%;
        }

        .iqy-col-xs-offset-17 {
            margin-left: 70.83333333%;
        }

        .iqy-col-xs-offset-18 {
            margin-left: 75%;
        }

        .iqy-col-xs-offset-19 {
            margin-left: 79.16666667%;
        }

        .iqy-col-xs-offset-20 {
            margin-left: 83.33333333%;
        }

        .iqy-col-xs-offset-21 {
            margin-left: 87.5%;
        }

        .iqy-col-xs-offset-22 {
            margin-left: 91.66666667%;
        }

        .iqy-col-xs-offset-23 {
            margin-left: 95.83333333%;
        }

        .iqy-col-xs-offset-24 {
            margin-left: 100%;
        }

        .iqy-col-xs-pull-1 {
            right: 4.16666667%;
        }

        .iqy-col-xs-pull-2 {
            right: 8.33333333%;
        }

        .iqy-col-xs-pull-3 {
            right: 12.5%;
        }

        .iqy-col-xs-pull-4 {
            right: 16.66666667%;
        }

        .iqy-col-xs-pull-5 {
            right: 20.83333333%;
        }

        .iqy-col-xs-pull-6 {
            right: 25%;
        }

        .iqy-col-xs-pull-7 {
            right: 29.16666667%;
        }

        .iqy-col-xs-pull-8 {
            right: 33.33333333%;
        }

        .iqy-col-xs-pull-9 {
            right: 37.5%;
        }

        .iqy-col-xs-pull-10 {
            right: 41.66666667%;
        }

        .iqy-col-xs-pull-11 {
            right: 45.83333333%;
        }

        .iqy-col-xs-pull-12 {
            right: 50%;
        }

        .iqy-col-xs-pull-13 {
            right: 54.16666667%;
        }

        .iqy-col-xs-pull-14 {
            right: 58.33333333%;
        }

        .iqy-col-xs-pull-15 {
            right: 62.5%;
        }

        .iqy-col-xs-pull-16 {
            right: 66.66666667%;
        }

        .iqy-col-xs-pull-17 {
            right: 70.83333333%;
        }

        .iqy-col-xs-pull-18 {
            right: 75%;
        }

        .iqy-col-xs-pull-19 {
            right: 79.16666667%;
        }

        .iqy-col-xs-pull-20 {
            right: 83.33333333%;
        }

        .iqy-col-xs-pull-21 {
            right: 87.5%;
        }

        .iqy-col-xs-pull-22 {
            right: 91.66666667%;
        }

        .iqy-col-xs-pull-23 {
            right: 95.83333333%;
        }

        .iqy-col-xs-pull-24 {
            right: 100%;
        }
        .iqy-col-xs-push-1 {
            left: 4.16666667%;
        }

        .iqy-col-xs-push-2 {
            left: 8.33333333%;
        }

        .iqy-col-xs-push-3 {
            left: 12.5%;
        }

        .iqy-col-xs-push-4 {
            left: 16.66666667%;
        }

        .iqy-col-xs-push-5 {
            left: 20.83333333%;
        }

        .iqy-col-xs-push-6 {
            left: 25%;
        }

        .iqy-col-xs-push-7 {
            left: 29.16666667%;
        }

        .iqy-col-xs-push-8 {
            left: 33.33333333%;
        }

        .iqy-col-xs-push-9 {
            left: 37.5%;
        }

        .iqy-col-xs-push-10 {
            left: 41.66666667%;
        }

        .iqy-col-xs-push-11 {
            left: 45.83333333%;
        }

        .iqy-col-xs-push-12 {
            left: 50%;
        }

        .iqy-col-xs-push-13 {
            left: 54.16666667%;
        }

        .iqy-col-xs-push-14 {
            left: 58.33333333%;
        }

        .iqy-col-xs-push-15 {
            left: 62.5%;
        }

        .iqy-col-xs-push-16 {
            left: 66.66666667%;
        }

        .iqy-col-xs-push-17 {
            left: 70.83333333%;
        }

        .iqy-col-xs-push-18 {
            left: 75%;
        }

        .iqy-col-xs-push-19 {
            left: 79.16666667%;
        }

        .iqy-col-xs-push-20 {
            left: 83.33333333%;
        }

        .iqy-col-xs-push-21 {
            left: 87.5%;
        }

        .iqy-col-xs-push-22 {
            left: 91.66666667%;
        }

        .iqy-col-xs-push-23 {
            left: 95.83333333%;
        }

        .iqy-col-xs-push-24 {
            left: 100%;
        }
    /*}*/

    @media screen and (min-width: 768px){
        .iqy-col-sm-span-0{
            display: none;
            width: 0;
        }
        .iqy-col-sm-span-1 {
            width: 4.16666667%;
        }

        .iqy-col-sm-span-2 {
            width: 8.33333333%;
        }

        .iqy-col-sm-span-3 {
            width: 12.5%;
        }

        .iqy-col-sm-span-4 {
            width: 16.66666667%;
        }

        .iqy-col-sm-span-5 {
            width: 20.83333333%;
        }

        .iqy-col-sm-span-6 {
            width: 25%;
        }

        .iqy-col-sm-span-7 {
            width: 29.16666667%;
        }

        .iqy-col-sm-span-8 {
            width: 33.33333333%;
        }

        .iqy-col-sm-span-9 {
            width: 37.5%;
        }

        .iqy-col-sm-span-10 {
            width: 41.66666667%;
        }

        .iqy-col-sm-span-11 {
            width: 45.83333333%;
        }

        .iqy-col-sm-span-12 {
            width: 50%;
        }

        .iqy-col-sm-span-13 {
            width: 54.16666667%;
        }

        .iqy-col-sm-span-14 {
            width: 58.33333333%;
        }

        .iqy-col-sm-span-15 {
            width: 62.5%;
        }

        .iqy-col-sm-span-16 {
            width: 66.66666667%;
        }

        .iqy-col-sm-span-17 {
            width: 70.83333333%;
        }

        .iqy-col-sm-span-18 {
            width: 75%;
        }

        .iqy-col-sm-span-19 {
            width: 79.16666667%;
        }

        .iqy-col-sm-span-20 {
            width: 83.33333333%;
        }

        .iqy-col-sm-span-21 {
            width: 87.5%;
        }

        .iqy-col-sm-span-22 {
            width: 91.66666667%;
        }

        .iqy-col-sm-span-23 {
            width: 95.83333333%;
        }

        .iqy-col-sm-span-24 {
            width: 100%;
        }


        .iqy-col-sm-offset-1 {
            margin-left: 4.16666667%;
        }

        .iqy-col-sm-offset-2 {
            margin-left: 8.33333333%;
        }

        .iqy-col-sm-offset-3 {
            margin-left: 12.5%;
        }

        .iqy-col-sm-offset-4 {
            margin-left: 16.66666667%;
        }

        .iqy-col-sm-offset-5 {
            margin-left: 20.83333333%;
        }

        .iqy-col-sm-offset-6 {
            margin-left: 25%;
        }

        .iqy-col-sm-offset-7 {
            margin-left: 29.16666667%;
        }

        .iqy-col-sm-offset-8 {
            margin-left: 33.33333333%;
        }

        .iqy-col-sm-offset-9 {
            margin-left: 37.5%;
        }

        .iqy-col-sm-offset-10 {
            margin-left: 41.66666667%;
        }

        .iqy-col-sm-offset-11 {
            margin-left: 45.83333333%;
        }

        .iqy-col-sm-offset-12 {
            margin-left: 50%;
        }

        .iqy-col-sm-offset-13 {
            margin-left: 54.16666667%;
        }

        .iqy-col-sm-offset-14 {
            margin-left: 58.33333333%;
        }

        .iqy-col-sm-offset-15 {
            margin-left: 62.5%;
        }

        .iqy-col-sm-offset-16 {
            margin-left: 66.66666667%;
        }

        .iqy-col-sm-offset-17 {
            margin-left: 70.83333333%;
        }

        .iqy-col-sm-offset-18 {
            margin-left: 75%;
        }

        .iqy-col-sm-offset-19 {
            margin-left: 79.16666667%;
        }

        .iqy-col-sm-offset-20 {
            margin-left: 83.33333333%;
        }

        .iqy-col-sm-offset-21 {
            margin-left: 87.5%;
        }

        .iqy-col-sm-offset-22 {
            margin-left: 91.66666667%;
        }

        .iqy-col-sm-offset-23 {
            margin-left: 95.83333333%;
        }

        .iqy-col-sm-offset-24 {
            margin-left: 100%;
        }

        .iqy-col-sm-pull-1 {
            right: 4.16666667%;
        }

        .iqy-col-sm-pull-2 {
            right: 8.33333333%;
        }

        .iqy-col-sm-pull-3 {
            right: 12.5%;
        }

        .iqy-col-sm-pull-4 {
            right: 16.66666667%;
        }

        .iqy-col-sm-pull-5 {
            right: 20.83333333%;
        }

        .iqy-col-sm-pull-6 {
            right: 25%;
        }

        .iqy-col-sm-pull-7 {
            right: 29.16666667%;
        }

        .iqy-col-sm-pull-8 {
            right: 33.33333333%;
        }

        .iqy-col-sm-pull-9 {
            right: 37.5%;
        }

        .iqy-col-sm-pull-10 {
            right: 41.66666667%;
        }

        .iqy-col-sm-pull-11 {
            right: 45.83333333%;
        }

        .iqy-col-sm-pull-12 {
            right: 50%;
        }

        .iqy-col-sm-pull-13 {
            right: 54.16666667%;
        }

        .iqy-col-sm-pull-14 {
            right: 58.33333333%;
        }

        .iqy-col-sm-pull-15 {
            right: 62.5%;
        }

        .iqy-col-sm-pull-16 {
            right: 66.66666667%;
        }

        .iqy-col-sm-pull-17 {
            right: 70.83333333%;
        }

        .iqy-col-sm-pull-18 {
            right: 75%;
        }

        .iqy-col-sm-pull-19 {
            right: 79.16666667%;
        }

        .iqy-col-sm-pull-20 {
            right: 83.33333333%;
        }

        .iqy-col-sm-pull-21 {
            right: 87.5%;
        }

        .iqy-col-sm-pull-22 {
            right: 91.66666667%;
        }

        .iqy-col-sm-pull-23 {
            right: 95.83333333%;
        }

        .iqy-col-sm-pull-24 {
            right: 100%;
        }
        .iqy-col-sm-push-1 {
            left: 4.16666667%;
        }

        .iqy-col-sm-push-2 {
            left: 8.33333333%;
        }

        .iqy-col-sm-push-3 {
            left: 12.5%;
        }

        .iqy-col-sm-push-4 {
            left: 16.66666667%;
        }

        .iqy-col-sm-push-5 {
            left: 20.83333333%;
        }

        .iqy-col-sm-push-6 {
            left: 25%;
        }

        .iqy-col-sm-push-7 {
            left: 29.16666667%;
        }

        .iqy-col-sm-push-8 {
            left: 33.33333333%;
        }

        .iqy-col-sm-push-9 {
            left: 37.5%;
        }

        .iqy-col-sm-push-10 {
            left: 41.66666667%;
        }

        .iqy-col-sm-push-11 {
            left: 45.83333333%;
        }

        .iqy-col-sm-push-12 {
            left: 50%;
        }

        .iqy-col-sm-push-13 {
            left: 54.16666667%;
        }

        .iqy-col-sm-push-14 {
            left: 58.33333333%;
        }

        .iqy-col-sm-push-15 {
            left: 62.5%;
        }

        .iqy-col-sm-push-16 {
            left: 66.66666667%;
        }

        .iqy-col-sm-push-17 {
            left: 70.83333333%;
        }

        .iqy-col-sm-push-18 {
            left: 75%;
        }

        .iqy-col-sm-push-19 {
            left: 79.16666667%;
        }

        .iqy-col-sm-push-20 {
            left: 83.33333333%;
        }

        .iqy-col-sm-push-21 {
            left: 87.5%;
        }

        .iqy-col-sm-push-22 {
            left: 91.66666667%;
        }

        .iqy-col-sm-push-23 {
            left: 95.83333333%;
        }

        .iqy-col-sm-push-24 {
            left: 100%;
        }

    }

    @media screen and (min-width: 992px){
        .iqy-col-md-span-0{
            display: none;
            width: 0;
        }
        .iqy-col-md-span-1 {
            width: 4.16666667%;
        }

        .iqy-col-md-span-2 {
            width: 8.33333333%;
        }

        .iqy-col-md-span-3 {
            width: 12.5%;
        }

        .iqy-col-md-span-4 {
            width: 16.66666667%;
        }

        .iqy-col-md-span-5 {
            width: 20.83333333%;
        }

        .iqy-col-md-span-6 {
            width: 25%;
        }

        .iqy-col-md-span-7 {
            width: 29.16666667%;
        }

        .iqy-col-md-span-8 {
            width: 33.33333333%;
        }

        .iqy-col-md-span-9 {
            width: 37.5%;
        }

        .iqy-col-md-span-10 {
            width: 41.66666667%;
        }

        .iqy-col-md-span-11 {
            width: 45.83333333%;
        }

        .iqy-col-md-span-12 {
            width: 50%;
        }

        .iqy-col-md-span-13 {
            width: 54.16666667%;
        }

        .iqy-col-md-span-14 {
            width: 58.33333333%;
        }

        .iqy-col-md-span-15 {
            width: 62.5%;
        }

        .iqy-col-md-span-16 {
            width: 66.66666667%;
        }

        .iqy-col-md-span-17 {
            width: 70.83333333%;
        }

        .iqy-col-md-span-18 {
            width: 75%;
        }

        .iqy-col-md-span-19 {
            width: 79.16666667%;
        }

        .iqy-col-md-span-20 {
            width: 83.33333333%;
        }

        .iqy-col-md-span-21 {
            width: 87.5%;
        }

        .iqy-col-md-span-22 {
            width: 91.66666667%;
        }

        .iqy-col-md-span-23 {
            width: 95.83333333%;
        }

        .iqy-col-md-span-24 {
            width: 100%;
        }


        .iqy-col-md-offset-1 {
            margin-left: 4.16666667%;
        }

        .iqy-col-md-offset-2 {
            margin-left: 8.33333333%;
        }

        .iqy-col-md-offset-3 {
            margin-left: 12.5%;
        }

        .iqy-col-md-offset-4 {
            margin-left: 16.66666667%;
        }

        .iqy-col-md-offset-5 {
            margin-left: 20.83333333%;
        }

        .iqy-col-md-offset-6 {
            margin-left: 25%;
        }

        .iqy-col-md-offset-7 {
            margin-left: 29.16666667%;
        }

        .iqy-col-md-offset-8 {
            margin-left: 33.33333333%;
        }

        .iqy-col-md-offset-9 {
            margin-left: 37.5%;
        }

        .iqy-col-md-offset-10 {
            margin-left: 41.66666667%;
        }

        .iqy-col-md-offset-11 {
            margin-left: 45.83333333%;
        }

        .iqy-col-md-offset-12 {
            margin-left: 50%;
        }

        .iqy-col-md-offset-13 {
            margin-left: 54.16666667%;
        }

        .iqy-col-md-offset-14 {
            margin-left: 58.33333333%;
        }

        .iqy-col-md-offset-15 {
            margin-left: 62.5%;
        }

        .iqy-col-md-offset-16 {
            margin-left: 66.66666667%;
        }

        .iqy-col-md-offset-17 {
            margin-left: 70.83333333%;
        }

        .iqy-col-md-offset-18 {
            margin-left: 75%;
        }

        .iqy-col-md-offset-19 {
            margin-left: 79.16666667%;
        }

        .iqy-col-md-offset-20 {
            margin-left: 83.33333333%;
        }

        .iqy-col-md-offset-21 {
            margin-left: 87.5%;
        }

        .iqy-col-md-offset-22 {
            margin-left: 91.66666667%;
        }

        .iqy-col-md-offset-23 {
            margin-left: 95.83333333%;
        }

        .iqy-col-md-offset-24 {
            margin-left: 100%;
        }

        .iqy-col-md-pull-1 {
            right: 4.16666667%;
        }

        .iqy-col-md-pull-2 {
            right: 8.33333333%;
        }

        .iqy-col-md-pull-3 {
            right: 12.5%;
        }

        .iqy-col-md-pull-4 {
            right: 16.66666667%;
        }

        .iqy-col-md-pull-5 {
            right: 20.83333333%;
        }

        .iqy-col-md-pull-6 {
            right: 25%;
        }

        .iqy-col-md-pull-7 {
            right: 29.16666667%;
        }

        .iqy-col-md-pull-8 {
            right: 33.33333333%;
        }

        .iqy-col-md-pull-9 {
            right: 37.5%;
        }

        .iqy-col-md-pull-10 {
            right: 41.66666667%;
        }

        .iqy-col-md-pull-11 {
            right: 45.83333333%;
        }

        .iqy-col-md-pull-12 {
            right: 50%;
        }

        .iqy-col-md-pull-13 {
            right: 54.16666667%;
        }

        .iqy-col-md-pull-14 {
            right: 58.33333333%;
        }

        .iqy-col-md-pull-15 {
            right: 62.5%;
        }

        .iqy-col-md-pull-16 {
            right: 66.66666667%;
        }

        .iqy-col-md-pull-17 {
            right: 70.83333333%;
        }

        .iqy-col-md-pull-18 {
            right: 75%;
        }

        .iqy-col-md-pull-19 {
            right: 79.16666667%;
        }

        .iqy-col-md-pull-20 {
            right: 83.33333333%;
        }

        .iqy-col-md-pull-21 {
            right: 87.5%;
        }

        .iqy-col-md-pull-22 {
            right: 91.66666667%;
        }

        .iqy-col-md-pull-23 {
            right: 95.83333333%;
        }

        .iqy-col-md-pull-24 {
            right: 100%;
        }
        .iqy-col-md-push-1 {
            left: 4.16666667%;
        }

        .iqy-col-md-push-2 {
            left: 8.33333333%;
        }

        .iqy-col-md-push-3 {
            left: 12.5%;
        }

        .iqy-col-md-push-4 {
            left: 16.66666667%;
        }

        .iqy-col-md-push-5 {
            left: 20.83333333%;
        }

        .iqy-col-md-push-6 {
            left: 25%;
        }

        .iqy-col-md-push-7 {
            left: 29.16666667%;
        }

        .iqy-col-md-push-8 {
            left: 33.33333333%;
        }

        .iqy-col-md-push-9 {
            left: 37.5%;
        }

        .iqy-col-md-push-10 {
            left: 41.66666667%;
        }

        .iqy-col-md-push-11 {
            left: 45.83333333%;
        }

        .iqy-col-md-push-12 {
            left: 50%;
        }

        .iqy-col-md-push-13 {
            left: 54.16666667%;
        }

        .iqy-col-md-push-14 {
            left: 58.33333333%;
        }

        .iqy-col-md-push-15 {
            left: 62.5%;
        }

        .iqy-col-md-push-16 {
            left: 66.66666667%;
        }

        .iqy-col-md-push-17 {
            left: 70.83333333%;
        }

        .iqy-col-md-push-18 {
            left: 75%;
        }

        .iqy-col-md-push-19 {
            left: 79.16666667%;
        }

        .iqy-col-md-push-20 {
            left: 83.33333333%;
        }

        .iqy-col-md-push-21 {
            left: 87.5%;
        }

        .iqy-col-md-push-22 {
            left: 91.66666667%;
        }

        .iqy-col-md-push-23 {
            left: 95.83333333%;
        }

        .iqy-col-md-push-24 {
            left: 100%;
        }

    }

    @media screen and (min-width: 1200px){
        .iqy-col-lg-span-0{
            display: none;
            width: 0;
        }
        .iqy-col-lg-span-1 {
            width: 4.16666667%;
        }

        .iqy-col-lg-span-2 {
            width: 8.33333333%;
        }

        .iqy-col-lg-span-3 {
            width: 12.5%;
        }

        .iqy-col-lg-span-4 {
            width: 16.66666667%;
        }

        .iqy-col-lg-span-5 {
            width: 20.83333333%;
        }

        .iqy-col-lg-span-6 {
            width: 25%;
        }

        .iqy-col-lg-span-7 {
            width: 29.16666667%;
        }

        .iqy-col-lg-span-8 {
            width: 33.33333333%;
        }

        .iqy-col-lg-span-9 {
            width: 37.5%;
        }

        .iqy-col-lg-span-10 {
            width: 41.66666667%;
        }

        .iqy-col-lg-span-11 {
            width: 45.83333333%;
        }

        .iqy-col-lg-span-12 {
            width: 50%;
        }

        .iqy-col-lg-span-13 {
            width: 54.16666667%;
        }

        .iqy-col-lg-span-14 {
            width: 58.33333333%;
        }

        .iqy-col-lg-span-15 {
            width: 62.5%;
        }

        .iqy-col-lg-span-16 {
            width: 66.66666667%;
        }

        .iqy-col-lg-span-17 {
            width: 70.83333333%;
        }

        .iqy-col-lg-span-18 {
            width: 75%;
        }

        .iqy-col-lg-span-19 {
            width: 79.16666667%;
        }

        .iqy-col-lg-span-20 {
            width: 83.33333333%;
        }

        .iqy-col-lg-span-21 {
            width: 87.5%;
        }

        .iqy-col-lg-span-22 {
            width: 91.66666667%;
        }

        .iqy-col-lg-span-23 {
            width: 95.83333333%;
        }

        .iqy-col-lg-span-24 {
            width: 100%;
        }


        .iqy-col-lg-offset-1 {
            margin-left: 4.16666667%;
        }

        .iqy-col-lg-offset-2 {
            margin-left: 8.33333333%;
        }

        .iqy-col-lg-offset-3 {
            margin-left: 12.5%;
        }

        .iqy-col-lg-offset-4 {
            margin-left: 16.66666667%;
        }

        .iqy-col-lg-offset-5 {
            margin-left: 20.83333333%;
        }

        .iqy-col-lg-offset-6 {
            margin-left: 25%;
        }

        .iqy-col-lg-offset-7 {
            margin-left: 29.16666667%;
        }

        .iqy-col-lg-offset-8 {
            margin-left: 33.33333333%;
        }

        .iqy-col-lg-offset-9 {
            margin-left: 37.5%;
        }

        .iqy-col-lg-offset-10 {
            margin-left: 41.66666667%;
        }

        .iqy-col-lg-offset-11 {
            margin-left: 45.83333333%;
        }

        .iqy-col-lg-offset-12 {
            margin-left: 50%;
        }

        .iqy-col-lg-offset-13 {
            margin-left: 54.16666667%;
        }

        .iqy-col-lg-offset-14 {
            margin-left: 58.33333333%;
        }

        .iqy-col-lg-offset-15 {
            margin-left: 62.5%;
        }

        .iqy-col-lg-offset-16 {
            margin-left: 66.66666667%;
        }

        .iqy-col-lg-offset-17 {
            margin-left: 70.83333333%;
        }

        .iqy-col-lg-offset-18 {
            margin-left: 75%;
        }

        .iqy-col-lg-offset-19 {
            margin-left: 79.16666667%;
        }

        .iqy-col-lg-offset-20 {
            margin-left: 83.33333333%;
        }

        .iqy-col-lg-offset-21 {
            margin-left: 87.5%;
        }

        .iqy-col-lg-offset-22 {
            margin-left: 91.66666667%;
        }

        .iqy-col-lg-offset-23 {
            margin-left: 95.83333333%;
        }

        .iqy-col-lg-offset-24 {
            margin-left: 100%;
        }

        .iqy-col-lg-pull-1 {
            right: 4.16666667%;
        }

        .iqy-col-lg-pull-2 {
            right: 8.33333333%;
        }

        .iqy-col-lg-pull-3 {
            right: 12.5%;
        }

        .iqy-col-lg-pull-4 {
            right: 16.66666667%;
        }

        .iqy-col-lg-pull-5 {
            right: 20.83333333%;
        }

        .iqy-col-lg-pull-6 {
            right: 25%;
        }

        .iqy-col-lg-pull-7 {
            right: 29.16666667%;
        }

        .iqy-col-lg-pull-8 {
            right: 33.33333333%;
        }

        .iqy-col-lg-pull-9 {
            right: 37.5%;
        }

        .iqy-col-lg-pull-10 {
            right: 41.66666667%;
        }

        .iqy-col-lg-pull-11 {
            right: 45.83333333%;
        }

        .iqy-col-lg-pull-12 {
            right: 50%;
        }

        .iqy-col-lg-pull-13 {
            right: 54.16666667%;
        }

        .iqy-col-lg-pull-14 {
            right: 58.33333333%;
        }

        .iqy-col-lg-pull-15 {
            right: 62.5%;
        }

        .iqy-col-lg-pull-16 {
            right: 66.66666667%;
        }

        .iqy-col-lg-pull-17 {
            right: 70.83333333%;
        }

        .iqy-col-lg-pull-18 {
            right: 75%;
        }

        .iqy-col-lg-pull-19 {
            right: 79.16666667%;
        }

        .iqy-col-lg-pull-20 {
            right: 83.33333333%;
        }

        .iqy-col-lg-pull-21 {
            right: 87.5%;
        }

        .iqy-col-lg-pull-22 {
            right: 91.66666667%;
        }

        .iqy-col-lg-pull-23 {
            right: 95.83333333%;
        }

        .iqy-col-lg-pull-24 {
            right: 100%;
        }
        .iqy-col-lg-push-1 {
            left: 4.16666667%;
        }

        .iqy-col-lg-push-2 {
            left: 8.33333333%;
        }

        .iqy-col-lg-push-3 {
            left: 12.5%;
        }

        .iqy-col-lg-push-4 {
            left: 16.66666667%;
        }

        .iqy-col-lg-push-5 {
            left: 20.83333333%;
        }

        .iqy-col-lg-push-6 {
            left: 25%;
        }

        .iqy-col-lg-push-7 {
            left: 29.16666667%;
        }

        .iqy-col-lg-push-8 {
            left: 33.33333333%;
        }

        .iqy-col-lg-push-9 {
            left: 37.5%;
        }

        .iqy-col-lg-push-10 {
            left: 41.66666667%;
        }

        .iqy-col-lg-push-11 {
            left: 45.83333333%;
        }

        .iqy-col-lg-push-12 {
            left: 50%;
        }

        .iqy-col-lg-push-13 {
            left: 54.16666667%;
        }

        .iqy-col-lg-push-14 {
            left: 58.33333333%;
        }

        .iqy-col-lg-push-15 {
            left: 62.5%;
        }

        .iqy-col-lg-push-16 {
            left: 66.66666667%;
        }

        .iqy-col-lg-push-17 {
            left: 70.83333333%;
        }

        .iqy-col-lg-push-18 {
            left: 75%;
        }

        .iqy-col-lg-push-19 {
            left: 79.16666667%;
        }

        .iqy-col-lg-push-20 {
            left: 83.33333333%;
        }

        .iqy-col-lg-push-21 {
            left: 87.5%;
        }

        .iqy-col-lg-push-22 {
            left: 91.66666667%;
        }

        .iqy-col-lg-push-23 {
            left: 95.83333333%;
        }

        .iqy-col-lg-push-24 {
            left: 100%;
        }

    }

    @media screen and (min-width: 1920px){
        .iqy-col-xl-span-0{
            display: none;
            width: 0;
        }
        .iqy-col-xl-span-1 {
            width: 4.16666667%;
        }

        .iqy-col-xl-span-2 {
            width: 8.33333333%;
        }

        .iqy-col-xl-span-3 {
            width: 12.5%;
        }

        .iqy-col-xl-span-4 {
            width: 16.66666667%;
        }

        .iqy-col-xl-span-5 {
            width: 20.83333333%;
        }

        .iqy-col-xl-span-6 {
            width: 25%;
        }

        .iqy-col-xl-span-7 {
            width: 29.16666667%;
        }

        .iqy-col-xl-span-8 {
            width: 33.33333333%;
        }

        .iqy-col-xl-span-9 {
            width: 37.5%;
        }

        .iqy-col-xl-span-10 {
            width: 41.66666667%;
        }

        .iqy-col-xl-span-11 {
            width: 45.83333333%;
        }

        .iqy-col-xl-span-12 {
            width: 50%;
        }

        .iqy-col-xl-span-13 {
            width: 54.16666667%;
        }

        .iqy-col-xl-span-14 {
            width: 58.33333333%;
        }

        .iqy-col-xl-span-15 {
            width: 62.5%;
        }

        .iqy-col-xl-span-16 {
            width: 66.66666667%;
        }

        .iqy-col-xl-span-17 {
            width: 70.83333333%;
        }

        .iqy-col-xl-span-18 {
            width: 75%;
        }

        .iqy-col-xl-span-19 {
            width: 79.16666667%;
        }

        .iqy-col-xl-span-20 {
            width: 83.33333333%;
        }

        .iqy-col-xl-span-21 {
            width: 87.5%;
        }

        .iqy-col-xl-span-22 {
            width: 91.66666667%;
        }

        .iqy-col-xl-span-23 {
            width: 95.83333333%;
        }

        .iqy-col-xl-span-24 {
            width: 100%;
        }


        .iqy-col-xl-offset-1 {
            margin-left: 4.16666667%;
        }

        .iqy-col-xl-offset-2 {
            margin-left: 8.33333333%;
        }

        .iqy-col-xl-offset-3 {
            margin-left: 12.5%;
        }

        .iqy-col-xl-offset-4 {
            margin-left: 16.66666667%;
        }

        .iqy-col-xl-offset-5 {
            margin-left: 20.83333333%;
        }

        .iqy-col-xl-offset-6 {
            margin-left: 25%;
        }

        .iqy-col-xl-offset-7 {
            margin-left: 29.16666667%;
        }

        .iqy-col-xl-offset-8 {
            margin-left: 33.33333333%;
        }

        .iqy-col-xl-offset-9 {
            margin-left: 37.5%;
        }

        .iqy-col-xl-offset-10 {
            margin-left: 41.66666667%;
        }

        .iqy-col-xl-offset-11 {
            margin-left: 45.83333333%;
        }

        .iqy-col-xl-offset-12 {
            margin-left: 50%;
        }

        .iqy-col-xl-offset-13 {
            margin-left: 54.16666667%;
        }

        .iqy-col-xl-offset-14 {
            margin-left: 58.33333333%;
        }

        .iqy-col-xl-offset-15 {
            margin-left: 62.5%;
        }

        .iqy-col-xl-offset-16 {
            margin-left: 66.66666667%;
        }

        .iqy-col-xl-offset-17 {
            margin-left: 70.83333333%;
        }

        .iqy-col-xl-offset-18 {
            margin-left: 75%;
        }

        .iqy-col-xl-offset-19 {
            margin-left: 79.16666667%;
        }

        .iqy-col-xl-offset-20 {
            margin-left: 83.33333333%;
        }

        .iqy-col-xl-offset-21 {
            margin-left: 87.5%;
        }

        .iqy-col-xl-offset-22 {
            margin-left: 91.66666667%;
        }

        .iqy-col-xl-offset-23 {
            margin-left: 95.83333333%;
        }

        .iqy-col-xl-offset-24 {
            margin-left: 100%;
        }

        .iqy-col-xl-pull-1 {
            right: 4.16666667%;
        }

        .iqy-col-xl-pull-2 {
            right: 8.33333333%;
        }

        .iqy-col-xl-pull-3 {
            right: 12.5%;
        }

        .iqy-col-xl-pull-4 {
            right: 16.66666667%;
        }

        .iqy-col-xl-pull-5 {
            right: 20.83333333%;
        }

        .iqy-col-xl-pull-6 {
            right: 25%;
        }

        .iqy-col-xl-pull-7 {
            right: 29.16666667%;
        }

        .iqy-col-xl-pull-8 {
            right: 33.33333333%;
        }

        .iqy-col-xl-pull-9 {
            right: 37.5%;
        }

        .iqy-col-xl-pull-10 {
            right: 41.66666667%;
        }

        .iqy-col-xl-pull-11 {
            right: 45.83333333%;
        }

        .iqy-col-xl-pull-12 {
            right: 50%;
        }

        .iqy-col-xl-pull-13 {
            right: 54.16666667%;
        }

        .iqy-col-xl-pull-14 {
            right: 58.33333333%;
        }

        .iqy-col-xl-pull-15 {
            right: 62.5%;
        }

        .iqy-col-xl-pull-16 {
            right: 66.66666667%;
        }

        .iqy-col-xl-pull-17 {
            right: 70.83333333%;
        }

        .iqy-col-xl-pull-18 {
            right: 75%;
        }

        .iqy-col-xl-pull-19 {
            right: 79.16666667%;
        }

        .iqy-col-xl-pull-20 {
            right: 83.33333333%;
        }

        .iqy-col-xl-pull-21 {
            right: 87.5%;
        }

        .iqy-col-xl-pull-22 {
            right: 91.66666667%;
        }

        .iqy-col-xl-pull-23 {
            right: 95.83333333%;
        }

        .iqy-col-xl-pull-24 {
            right: 100%;
        }
        .iqy-col-xl-push-1 {
            left: 4.16666667%;
        }

        .iqy-col-xl-push-2 {
            left: 8.33333333%;
        }

        .iqy-col-xl-push-3 {
            left: 12.5%;
        }

        .iqy-col-xl-push-4 {
            left: 16.66666667%;
        }

        .iqy-col-xl-push-5 {
            left: 20.83333333%;
        }

        .iqy-col-xl-push-6 {
            left: 25%;
        }

        .iqy-col-xl-push-7 {
            left: 29.16666667%;
        }

        .iqy-col-xl-push-8 {
            left: 33.33333333%;
        }

        .iqy-col-xl-push-9 {
            left: 37.5%;
        }

        .iqy-col-xl-push-10 {
            left: 41.66666667%;
        }

        .iqy-col-xl-push-11 {
            left: 45.83333333%;
        }

        .iqy-col-xl-push-12 {
            left: 50%;
        }

        .iqy-col-xl-push-13 {
            left: 54.16666667%;
        }

        .iqy-col-xl-push-14 {
            left: 58.33333333%;
        }

        .iqy-col-xl-push-15 {
            left: 62.5%;
        }

        .iqy-col-xl-push-16 {
            left: 66.66666667%;
        }

        .iqy-col-xl-push-17 {
            left: 70.83333333%;
        }

        .iqy-col-xl-push-18 {
            left: 75%;
        }

        .iqy-col-xl-push-19 {
            left: 79.16666667%;
        }

        .iqy-col-xl-push-20 {
            left: 83.33333333%;
        }

        .iqy-col-xl-push-21 {
            left: 87.5%;
        }

        .iqy-col-xl-push-22 {
            left: 91.66666667%;
        }

        .iqy-col-xl-push-23 {
            left: 95.83333333%;
        }

        .iqy-col-xl-push-24 {
            left: 100%;
        }

    }
</style>
