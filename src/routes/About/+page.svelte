<script>
    import Navbar from '../+layout.svelte'
    import homecoverabout from '$lib/images/homecoverabout.jpg'
    import aboutus from '$lib/images/aboutus.jpg'
    import bg1 from '$lib/images/bg1.jpg'
</script>
<svelte:head>
    <title>AboutUs</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>
<div  >
<section>
    
        
        <source srcset={homecoverabout} type="image/jpg" />
        <img class="h-1/2" srcset={homecoverabout} alt="homecover" />
        <source srcset={bg1} type="image/jpg"/>
        <img  class=" h-screen md:h-auto md:w-full " srcset={bg1} alt="aboutimg" />
        
        <div class="p-3 absolute left-0 top-60 md:top-52 w-full md:flex md:items-center md:justify-between">
            <div class="grid grid-cols-1 md:grid-cols-2 content-start md:content-around ">
                <div class="m-5 translate-y-96 md:translate-y-0">
                    <picture>       
                        <source srcset={aboutus} type="image/jpg"/>
                        <img  class="w-full"srcset={aboutus} alt="aboutimg" />

                    </picture>
                </div>
            
                <div class="m-5 -translate-y-[23rem] md:translate-y-0">
                        <h1 class=" text-center md:text-left font-sans font-bold lg:text-4xl md:text-1xl py-6">ABOUT PLACECOM</h1>
                        <h1 class="font-sans font-bold lg:text-2xl md:text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et leo duis. Ut consequat semper viverra nam. Eget nunc scelerisque viverra mauris. Sit amet consectetur adipiscing elit. At volutpat diam ut venenatis. Quis eleifend quam adipiscing vitae proin sagittis nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et leo duis. Ut consequat semper viverra nam. </h1>
                </div>
            </div>
        </div>
</section>
</div>
