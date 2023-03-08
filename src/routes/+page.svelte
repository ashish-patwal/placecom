<script>
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import GradientCard from '../components/gradient-card.svelte'
	import homecover from '$lib/images/homecover.jpg'
	import student from '$lib/images/student.svg'
	import interview from '$lib/images/interview.svg'
	import career from '$lib/images/career.svg'
	import proposalPresentation from '$lib/images/team/proposal-presentation.svg'
	import placementPlanning from '$lib/images/team/placement-planning.svg'
	import student2 from '$lib/images/students/student-2.svg'
	import student3 from '$lib/images/students/student-3.svg'
	import student4 from '$lib/images/students/student-4.svg'

	let ready = false
	onMount(() => (ready = true))
	const heading = ['BRIDGING', 'THE', 'GAP', 'BETWEEN', 'JOB', 'SEEKERS', 'AND', 'JOB', 'PROVIDERS']

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const handleHackerText = event => {
		let iters = 0

		const interval = setInterval(() => {
			event.target.innerText = event.target.innerText
				.split('')
				.map((letter, index) => {
					if (index < iters) {
						return event.target.dataset.value[index]
					} else return letter === ' ' ? letter : letters[Math.floor(Math.random() * 26)]
				})
				.join('')

			if (iters >= event.target.dataset.value.length) clearInterval(interval)
			iters += 1 / 4
		}, 30)
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Placecom" content="Homepage" />
</svelte:head>

<main>
	<section class="relative">
		{#if ready}
			<div
				class="absolute left-0 right-0 top-24 mx-3.5 flex w-min flex-col border-8 border-white p-4 font-sans text-6xl font-extrabold leading-[4rem] text-white mx-auto sm:text-center sm:text-7xl md:text-8xl"
				transition:fly={{ y: 200, duration: 1300 }}
			>
				{#each heading as word, index}
					<h1
						class="max-w-min md:self-center"
						data-value={word}
						on:focus
						on:mouseover={handleHackerText}
						transition:fly={{ y: 100, duration: 1500 + index * 150 }}
					>
						{word}
					</h1>
				{/each}
			</div>
		{/if}
		<div class="w-screen overflow-hidden">
			<img
				class="h-[85rem] sm:h-[100rem] max-w-none 2xl:h-auto 2xl:max-w-full"
				srcset={homecover}
				alt="homecover"
			/>
		</div>
	</section>
	<section
		class="flex w-full flex-col gap-16 bg-black p-10 md:flex-row md:flex-wrap md:justify-center md:p-16"
	>
		<div class="flex flex-col items-center justify-evenly">
			<h1 class="my-6 max-w-lg text-center font-sacramento text-5xl text-white md:text-6xl">
				Taking you a step forward in you career !
			</h1>
			<div class="carousel-center carousel rounded-box w-72 space-x-4 md:w-80 lg:w-96">
				<div id="slide1" class="carousel-item relative w-full">
					<img src={student} class="w-full" alt="Tailwind CSS Carousel component" />
				</div>
				<div id="slide2" class="carousel-item relative w-full">
					<img src={interview} class="w-full" alt="Tailwind CSS Carousel component" />
				</div>
				<div id="slide3" class="carousel-item relative w-full">
					<img src={career} class="w-full" alt="Tailwind CSS Carousel component" />
				</div>
			</div>
		</div>
		<GradientCard />
	</section>
	<section
		class="relative flex h-full w-full flex-wrap justify-center bg-gradient-to-br from-layerone-pink-three via-layerone-pink-two to-layerone-pink-one p-10 md:h-screen "
	>
		<div class="flex basis-1/2 flex-col justify-center gap-6 font-poppins text-lime">
			<h1 class="text-5xl font-bold">PROPOSAL PRESENTATION</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus harum exercitationem
				commodi. Officia expedita excepturi distinctio? Obcaecati, nemo neque dignissimos numquam
				ratione illo ipsam mollitia, alias ipsum natus name dicta? Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Name, molestiae error earum, laborum aperiam fugit ipsam
				aliquam autem nesciunt odio rem similique deserunt distinctio, ipsum id quas quos provident
				iure? Enim perferendis accusamus porro facilis ducimus fugiat, distinctio cumque nulla quas
				voluptas voluptate placeat name unde delectus. Necessitatibus nisi magni accusantium,
				maxime, sapiente nulla possimus tempora itaque a, ullam modi. Libero aperiam et earum soluta
				doloremque architecto dolor, mollitia hic qui ex illum debitis minima voluptas name saepe
				fugit corrupti quidem dolorum, perspiciatis nostrum esse recusandae deserunt adipisci.
				Tempora, quam.
			</p>
		</div>
		<div class="flex basis-1/2 justify-center">
			<img
				class="transition-all delay-100 ease-in-out hover:scale-110 hover:brightness-105"
				src={proposalPresentation}
				alt="proposal presentation"
			/>
		</div>
	</section>
	<section
		class="relative flex h-full w-full flex-wrap justify-center bg-gradient-to-br from-layertwo-neon-three via-layertwo-neon-two to-layertwo-neon-one p-10 md:h-screen"
	>
		<div class="flex basis-1/2 flex-col justify-center gap-6 font-poppins">
			<h1 class="text-5xl font-bold">PLACEMENT PLANNING</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus harum exercitationem
				commodi. Officia expedita excepturi distinctio? Obcaecati, nemo neque dignissimos numquam
				ratione illo ipsam mollitia, alias ipsum natus name dicta? Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Name, molestiae error earum, laborum aperiam fugit ipsam
				aliquam autem nesciunt odio rem similique deserunt distinctio, ipsum id quas quos provident
				iure? Enim perferendis accusamus porro facilis ducimus fugiat, distinctio cumque nulla quas
				voluptas voluptate placeat name unde delectus. Necessitatibus nisi magni accusantium,
				maxime, sapiente nulla possimus tempora itaque a, ullam modi. Libero aperiam et earum soluta
				doloremque architecto dolor, mollitia hic qui ex illum debitis minima voluptas name saepe
				fugit corrupti quidem dolorum, perspiciatis nostrum esse recusandae deserunt adipisci.
				Tempora, quam.
			</p>
		</div>
		<div class="flex basis-1/2 justify-center md:-order-1">
			<img
				class="transition-all delay-100 ease-in-out hover:scale-110 hover:brightness-105"
				src={placementPlanning}
				alt="placement planning"
			/>
		</div>
	</section>
	<section
		class="relative flex h-full w-full bg-gradient-to-br from-layerthree-violet-three via-layerthree-violet-two to-layerthree-violet-one p-10 md:h-screen"
	>
		<div class="flex basis-1/2 flex-col justify-center gap-6 font-poppins text-mist">
			<h1 class="text-5xl font-bold">HIRING GREAT TALENTS FOR YOU</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus harum exercitationem
				commodi. Officia expedita excepturi distinctio? Obcaecati, nemo neque dignissimos numquam
				ratione illo ipsam mollitia, alias ipsum natus name dicta? Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Name, molestiae error earum, laborum aperiam fugit ipsam
				aliquam autem nesciunt odio rem similique deserunt distinctio, ipsum id quas quos provident
				iure? Enim perferendis accusamus porro facilis ducimus fugiat, distinctio cumque nulla quas
				voluptas voluptate placeat name unde delectus. Necessitatibus nisi magni accusantium,
				maxime, sapiente nulla possimus tempora itaque a, ullam modi. Libero aperiam et earum soluta
				doloremque architecto dolor, mollitia hic qui ex illum debitis minima voluptas name saepe
				fugit corrupti quidem dolorum, perspiciatis nostrum esse recusandae deserunt adipisci.
				Tempora, quam.
			</p>
		</div>
		<div class="flex basis-1/2 flex-col justify-center md:flex-row">
			<div class="flex basis-1/3 flex-col justify-center">
				<img
					class="transition-all delay-100 ease-in-out hover:scale-110 hover:brightness-105"
					src={student2}
					alt="student 2"
				/>
			</div>
			<div class="flex basis-1/3 flex-col justify-center">
				<img
					class="transition-all delay-100 ease-in-out hover:scale-110 hover:brightness-105"
					src={student3}
					alt="student 3"
				/>
			</div>
			<div class="flex basis-1/4 flex-col justify-center">
				<img
					class="transition-all delay-100 ease-in-out hover:scale-110 hover:brightness-105"
					src={student4}
					alt="student 4"
				/>
			</div>
		</div>
	</section>
</main>
