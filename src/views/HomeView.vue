<template>
    <div class="flex items-center justify-center">
        <div class="flex items-center justify-center gap-8 flex-col w-4/5">
            <Nav class=""></Nav>
            
           
            <img src="..//assets/convetion1.jpg" alt="" class="w-full h-96 object-cover">
          

            <!--<marquee  behavior="slide" direction="right and left" scrollamount="15">
            <img src="../assets/Kigali-Arena.jpg" alt="" class="w-full h-96 object-cover"> 
            </marquee>-->
           

            <ul class="flex items-center justify-between text-center text-white w-full">
                <li class="bg-[#EA6B1E] w-full p-4 flex flex-col gap-2">
                    <div class="text-2xl">Petition Application</div>
                    <div class="flex justify-around gap-12">
                        <span>Apply</span>
                        <span class="border px-8 rounded">Guide</span>
                    </div>
                </li>

                <li class="bg-[#15A13E] w-full p-4 flex flex-col gap-2">
                    <div class="text-2xl">Information Lookup</div>
                    <div class="flex justify-around gap-12">
                        <span>Apply</span>
                        <span class="border px-8 rounded">Guide</span>
                    </div>
                </li>

                <li class="bg-[#2A76C4] w-full p-4 flex flex-col gap-2">
                    <div class="text-2xl">Reserve Visit</div>
                    <div class="flex justify-around gap-12">
                        <span>Apply</span>
                        <span class="border px-8 rounded">Guide</span>
                    </div>
                </li>

                <li class="bg-[#2A445F] w-full p-4 flex flex-col gap-2">
                    <div class="text-2xl">Logging Registration</div>
                    <div class="flex justify-around gap-12">
                        <span>Apply</span>
                        <span class="border px-8 rounded">Guide</span>
                    </div>
                </li>
            </ul>

            <div class="grid grid-cols-5 w-full gap-4">
                <div class="col-span-3 ">
                    <h3 class="text-2xl font-bold pl-2">
                        My Civil Petition Status
                    </h3>
                    <div class=" grid grid-cols-4 mt-4 border-2 gap-4 p-2">
                        <div class="grid grid-rows-2 border border-blue-500 text-center">
                            <div class="text-white bg-[#2A76C4] flex items-center justify-center">
                                <span>My Petition</span>
                            </div>
                            <div class="text-white bg-[#2A445F] flex items-center justify-center">
                                <span>Confirm <br> Reservation</span>
                            </div>
                        </div>
                        <div class="col-span-2 ">
                            <ul>
                                <li>e-Petition Application Status</li>
                                <li>Check Visa Application Result</li>
                                <li>Reserve Visit Status</li>
                                <li>Apply for Automated Immigration Clearance</li>
                                <li>Preliminary Declaration of Voluntary Departure</li>
                                <li>Refugee Appeal Application</li>
                            </ul>
                        </div>

                        <div class="flex items-center justify-center">
                            <img src="../assets/pokemin2.jpg" alt="" class="border-2 h-36 object-cover">
                        </div>
                    </div>
                </div>

                <div class="col-span-2 grid gap-2">
                    <h3 class="text-2xl font-bold">Favorites Services</h3>
                    <ul class="flex flex-col gap-2 border-2 p-4">
                        <li class="border-b">Guide</li>
                        <li class="border-b">Application form</li>
                        <li class="border-b">Obligation for Aliens & Employers</li>
                        <li class="border-b">Reference material for naturalization interview</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-[#E4E4E4] w-full mt-6 flex items-center justify-center">
        <div class="w-4/5 flex gap-8 p-5">
            <div class="flex items-center justify-center flex-col">
                <img src="../assets/pokemin2.jpg" alt="" class="w-24 rounded-lg">
                <span>Office Directory</span>
            </div>
            <div class="flex items-center justify-center flex-col">
                <img src="../assets/pokemin2.jpg" alt="" class="w-24 rounded-lg">
                <span class="text-center">Validity check of Registration card</span>
            </div>
            <div class="flex items-center justify-center flex-col">
                <img src="../assets/pokemin2.jpg" alt="" class="w-24 rounded-lg">
                <span>Expiry Date check</span>
            </div>
        </div>
    </div>

    <div class="min-h-screen">

    </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
</script>