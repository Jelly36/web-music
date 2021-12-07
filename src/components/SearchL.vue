<template>
    <div class="search">
        <div class="search-core d-flex flex-row">
            <div class="input">
                <input type="text" class="text-box" placeholder="我最美">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .search{
        .search-core{
            height: 43px;
            .input{
                position: relative;
                i{
                    color: #666;
                    height: 100%;
                    right: 12px;
                    position: absolute;
                    top: 15%;
                    font-size: 18px;
                    cursor: pointer;

                }
                .text-box{
                    background-color: #fff;
                    border: none;
                    border-radius: 4px;
                    color: #333;
                    font-size: 16px;
                    height: 100%;
                    width: 400px;
                    outline: none;
                    padding-inline-end: 40px;
                    padding-inline-start: 26px;
                    position: relative;

                }
            }

        }
    }
</style>
