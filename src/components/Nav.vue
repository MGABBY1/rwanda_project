<template>
    <div class="flex items-center justify-center gap-8 flex-col w-full">
        <div class="flex w-full items-center gap-2">
            <img src="../assets/Rlogo.svg" class="h-36 w-36 mt-5 motion-safe:hover:-translate-x-0.5 motion-safe:transition">

            <div class="mt-2 w-1/2">
                <p><b> REPUBLIC OF RWANDA</b></p>
                <p><b>LOCAL GOVERNMENT RESERVATION SYSTEM</b></p>
            </div>



            <div class="mb-28 w-full text-right flex item-center justify-end gap-12 px-12">
                <p><router-link :to="{ name: 'login'}">Log in</router-link></p>
                <p><a href="#Create your account.asp">Create your account</a></p>
                <p><a href="#Guide.asp">Guide</a></p>
                <p><a href="#ENGLISH.asp">ENGLISH</a></p>
                <p><a href="#KINYARWANDA.asp">KINYARWANDA</a></p>
            </div>


        </div>


        <ul class="grid grid-cols-5 gap-4 text-center w-full">
            <div class="group relative">
    
                
                <li class="menu-hover border-r-2 "><b>CELLS</b></li>
                
              
                <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Sunday
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Monday
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Tuesday
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Wednesday
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Thursday
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Friday
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Saturday
                </a>
            </div>

        </div>

            <div class="group relative">

                <li class="menu-hover border-r-2 "><b>SECTORS</b></li>
            
                <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                 NYAMIRAMA
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                 RURAMIRA
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                   MUKARANGE
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                   RWINKWAVU
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                  KABARONDO
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Friday
                </a>

                <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Saturday
                </a>
            </div>

        </div>

            
        <div class="group relative">
            <li class="menu-hover border-r-2 "><b>DISTRICTS</b></li>

            <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

            <router-link  :to="{ name: 'kayonza'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              KAYONZA
            </router-link>

            <router-link  :to="{ name: 'rwamagana'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                RWAMAGANA 
            </router-link>

            <router-link  :to="{ name: 'bugesera'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                BUGESERA
            </router-link>

            <router-link  :to="{ name: 'nyagatare'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                NYAGATARE
            </router-link>

            <router-link  :to="{ name: 'kirehe'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               KIREHE
            </router-link>

            <router-link  :to="{ name: 'ngoma'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               NGOMA
            </router-link>

            <router-link  :to="{ name: 'gatsibo'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               GATSIBO
            </router-link>

            <router-link  :to="{ name: 'ngoma'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              BUTARE
            </router-link>
    </div>

</div>

        <div class="group relative">
                    <li class="border-r-2"><b>PROVINCES</b></li>


                    <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

        <router-link  :to="{ name: 'eastern'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          EASTERN 
        </router-link>

        <router-link  :to="{ name: 'western'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
           WESTERN
        </router-link>

        <router-link  :to="{ name: 'northern'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            NORTHERN 
        </router-link>

        <router-link  :to="{ name: 'southern'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
           SOUTHERN
        </router-link>

        <router-link  :to="{ name: 'kigali city'}" class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
           KIGALI CITY
        </router-link>

       
    </div>

</div>

        <div class="group relative">
                    <li class="border-r-2"><b> News & Announcement</b></li>

                    <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Sunday
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Monday
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Tuesday
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Wednesday
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Thursday
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Friday
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            Saturday
        </a>
    </div>

</div>
        </ul>

    </div>
</template>

<script setup>

</script>