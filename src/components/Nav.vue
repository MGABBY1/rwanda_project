<template>
    <div class="flex items-center justify-center gap-8 flex-col w-full">
        <div class="flex w-full items-center gap-2">
            <img src="../assets/Rlogo.svg" class="h-36 w-36 mt-5" >

            <div class="mt-2 w-1/2">
                <p><b> REPUBLIC OF RWANDA</b></p>
                <p><b>LOCAL GOVERNMENT RESERVATION SYSTEM</b></p>
            </div>



            <div class="mb-28 w-full text-right flex item-center justify-end gap-12 px-12">
                <p><a href="#Log in.asp">Log in</a></p>
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

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                RWAMAGANA
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                BUGESERA
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                NYAGATARE
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               KIREHE
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               NGOMA
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
               GATSIBO
            </a>

            <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
              BUTARE
            </a>
    </div>

</div>

        <div class="group relative">
                    <li class="border-r-2"><b>PROVINCES</b></li>


                    <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          EASTERN 
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
           WESTER
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
            NORTHERN 
        </a>

        <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
           SOUTHERN
        </a>

       
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