<template>
    <div class="search">
        <div class="search-core d-flex flex-row">
            <div class="input">
                <input type="text" class="text-box">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .search{
        .search-core{
            width: 60%;
            height: 36px;
            margin: 10px auto;
            .input{
                position: relative;
                i{
                    color: #666;
                    height: 100%;
                    right: 12px;
                    position: absolute;
                    top: 15%;

                }
                .text-box{
                    background-color: #fff;
                    border: none;
                    border-radius: 20px;
                    color: #333;
                    font-size: 16px;
                    height: 100%;
                    outline: none;
                    padding-inline-end: 40px;
                    padding-inline-start: 52px;
                    position: relative;
                    width: 100%;

                }
            }

        }
    }
</style>