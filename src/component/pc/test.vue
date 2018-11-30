<template>
    <div class="example-demo">
        <Row>
            <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "test",
        data: function(){
            return {
                gutter: 60,
            }
        },
        methods: {
            changeGutter: function () {
                this.gutter += 10;
                console.log(this.gutter)
            }
        }
    }
</script>

<style>
    .code-row-bg{
        background: rgba(0,0,0,.05);
    }

    .example-demo [class*=iqy-col-]:nth-child(odd){
        background: rgba(0,153,229,.7);
    }
    [class*=iqy-col-]{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0,153,229,.9);
    }

    .example-demo [class*=iqy-col]:nth-child(odd) div{
        background: rgba(0,153,229,.7);
    }
    .example-demo [class*=iqy-col] div{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0,153,229,.9);
    }

    .example-demo .ivu-col:nth-child(odd){
        background: rgba(0,153,229,.7);
    }
    .example-demo .ivu-col{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0,153,229,.9);
    }

</style>
