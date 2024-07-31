<script>
    import youtubeSvg from './youtube.svg';
    import avatar from './avatar.png';
    function Click(){
        document.i.style.transform = '360deg'
    }
</script>




<nav class="bg-black flex flex-wrap justify-between p-3 items-center fixed  w-[100%]">
    <div class="flex flex-wrap justify-between items-center"><i class="fa-solid fa-bars text-white text-2xl mr-7 ml-5" on:click{Click}></i><img src={youtubeSvg} alt="logo" class="w-[40px] h-[40px]"><p class="text-white">YouTube</p></div>
    <div class='flex flex-wrap '>
        <input type="search" placeholder="Search" class="w-[450px] p-1 bg-black border border-gray-400 text-white outline-none ml-[-190px]">
        <button class='btn text-white bg-gray-700 p-5 border border-gray-400'><i class="fa-solid fa-magnifying-glass "></i></button>

        <button class='rounded-full bg-gray-700 ml-6 h-[50px] w-[50px] p-3 flex items-center hover:bg-gray-800 duration-75'><i class="fa-solid fa-microphone text-white text-2xl "></i></button>
    </div>
    <div class='flex flex-wrap justify-between items-center'>
        <button><i class="fa-solid fa-square-plus text-white text-3xl mr-5"></i></button>
        <button><i class="fa-regular fa-bell text-white text-3xl mr-5"></i></button>
        <img src={avatar} alt="avatar" class='w-[50px] h-[50px]'>
    </div>
    
</nav>


<style>
    p{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 22px;
        font-weight: 100;
        margin-left: 10px;
    }
    input{
        border-radius: 50px 0% 0% 50px;
        height: 50px;
    }
    .btn{
        border-radius: 0 50px 50px 0;
         height: 50px;
         display: flex;
         text-align: center;
         align-items: center;
    }
</style>