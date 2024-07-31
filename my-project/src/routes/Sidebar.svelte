<script>
    let text = 'Home';
    let text2 = 'Shorts';
    let text3 = 'Subscription';
    let text4 =  'You';
    let text5 = 'History';
    let text6 = 'Playlists';
    let text7 = 'Watch later';
    let text8 = 'Liked videos';
    let text9 = 'Subscription';
    let text10 = 'Explore';
    let text11 = 'Trending';
    let text12 = 'Music';
    let text13 = 'Live';
    let text14 = 'Gaming';
    let text15 = 'News';
    let text16 = 'Sports';
    let text17 = 'Learning';
    let text18 = 'Fashion & Beauty';
    let text19 = 'More from YouTube';
    let text20 = 'YouTube kids';
    let text21 = 'Settings';
    let text22 = 'Report history';
    let text23 = 'Help';
    let text24 = 'Send feedback';
    let text25 = 'AboutPressCopyrightContact usCreatorsAdvertiseDevelopers';
    let text26 = 'TermsPrivacyPolicy & SafetyHow YouTube worksTest new features';
    let date = '© 2024 Google LLC'
     import youtubeSvg from './youtube.svg';
</script>

<section class="w-[20%] bg-black h-[100vh] overflow-auto text-white p-4 list-none">
    <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href="/" class=''><i class="fa-solid fa-house mr-3"></i>{text}</a></li>
    <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold mt-4"><a href="/" class=''><i class="fa-solid fa-house mr-3"></i>{text}</a></li>
    <li  class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href="/posts" class=' '> <i class="fa-brands fa-square-youtube mr-3"></i>{text2}</a></li>
     <li  class=" text-[20px] hover:text-black mb-2 hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href="/todo" class=''> <i class="fa-solid fa-sliders mr-3"></i>{text3}</a></li>
     <hr>
     <li class="text-white text-[20px]">{text4}<i class="fa-solid fa-arrow-right ml-2"></i></li>
     <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href="/history" class=''> <i class="fa-solid fa-clock-rotate-left mr-3"></i>{text5}</a></li>
     <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href="/playlist" class=''><i class="fa-solid fa-file-lines mr-3"></i>{text6}</a></li>
     <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href="/watch" class=''><i class="fa-regular fa-clock mr-3"></i>{text7}</a></li>
     <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold mb-2"><a href="/Liked" class=''><i class="fa-regular fa-thumbs-up mr-3"></i>{text8}</a></li>
     <hr>
     <li class="text-[20px] p-3">{text9}: none</li>
     <hr>
     <h3 class='text-[20px] p-2'>{text10}</h3>
     <li  class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href=""><i class="fa-solid fa-fire mr-3"></i>{text11}</a></li>
     <li  class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href=""><i class="fa-solid fa-music mr-3"></i>{text12}</a></li>
     <li  class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href=""><i class="fa-solid fa-tower-broadcast mr-3"></i>{text13}</a></li>
     <li  class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href=""><i class="fa-solid fa-gamepad mr-3"></i>{text14}</a></li>
     <li  class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href=""><i class="fa-regular fa-newspaper mr-3"></i>{text15}</a></li>
     <li  class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href=""><i class="fa-solid fa-trophy mr-3"></i>{text16}</a></li>
     <li  class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href=""><i class="fa-regular fa-lightbulb mr-3"></i>{text17}</a></li>
     <li  class=" text-[20px] hover:text-black mb-2 hover:bg-white  duration-100 p-2 rounded-xl font-bold"><a href=""><i class="fa-solid fa-shirt mr-2"></i>{text18}</a></li>
     <hr>
     <h3>{text19}</h3>
     <li class='flex flex-wrap items-center'><img src={youtubeSvg} alt="logo" class="w-[50px] h-[50px] mr-3"><p class='text-[20px] font-serif'>{text20}</p></li>
     <hr>
        <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold mt-2"><i class="fa-solid fa-gear mr-3"></i>{text21}</li>
        <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><i class="fa-regular fa-flag mr-3"></i>{text22}</li>
        <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold"><i class="fa-solid fa-circle-question mr-3"></i>{text23}</li>
        <li class=" text-[20px] hover:text-black hover:bg-white  duration-100 p-2 rounded-xl font-bold mb-2"><i class="fa-solid fa-circle-exclamation mr-3"></i>{text24}</li>
        <hr>
        <p class='p-2'>{text25}</p>
        <p class='p-2'>{text26}</p>
</section>