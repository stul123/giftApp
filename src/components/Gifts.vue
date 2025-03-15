<script>
import MyGifts  from './MyGifts.vue';
import Menu  from './Menu.vue';
export default {
    name: 'Gifts',
    components: {
        MyGifts,
        Menu
    }
};
</script>

<template>
    <div className="flex flex-col justify-center items-center gap-2 pb-4 pt-6 w-full ">
        <p className="mt-2 text-2xl	font-semibold">Send Gifts in Telegram</p>
        <p className="text-[17px] text-[#8E8E93] max-w-xs">Send gifts to users that can be stored in their app profile.</p>
    </div>
    <div className="p-4 w-full">
        <MyGifts />
    </div>
    <Menu activeTab="gifts" />
</template>

<style>

</style>  