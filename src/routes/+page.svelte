<script>
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import GradientCard from '../components/gradient-card.svelte'
	import homecover from '$lib/images/homecover.jpg'
	import student from '$lib/images/student.svg'
	import interview from '$lib/images/interview.svg'
	import career from '$lib/images/career.svg'
	import whyPlacecom from '$lib/images/why-placecom.jpg'
	import placementPlanning from '$lib/images/placement-planning.jpg'
	import greatTalents from '$lib/images/great-talents.jpg'
	import proposalPresentation from '$lib/images/team/proposal-presentation.svg'
	import students from '$lib/images/team/students.svg'

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
				class="absolute left-0 right-0 top-24 mx-auto flex w-fit flex-col border-8 border-white p-4 font-sans text-6xl font-extrabold leading-[4rem] text-white sm:text-center sm:text-7xl md:text-8xl"
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
				class="h-[85rem] max-w-none sm:h-[100rem] 2xl:h-auto 2xl:w-full"
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
	<section class="pt-10 text-center lg:pt-16">
		<h1 class="font-BebasNeue text-7xl font-bold lg:text-9xl">SOMETHING ABOUT US</h1>
	</section>
	<section class="px-7 pt-7 md:px-20 md:pt-20">
		<div
			class="card bg-gradient-to-br from-layerone-pink-three via-layerone-pink-two to-layerone-pink-one font-poppins text-lime shadow-xl lg:card-side"
		>
			<figure><img src={whyPlacecom} alt="Album" /></figure>
			<div class="card-body lg:w-2/3">
				<h1 class="card-title text-2xl font-bold lg:text-5xl">WHY PLACECOM ?</h1>
				<p class="lg:text-lg">
					A one-stop solution for placement opportunities. We are a comprehensive platform to
					provide services that offers end-to-end assistance to job seekers in finding suitable
					employment opportunities. We aim to provide a range of services, including job search
					tools, career counseling, resume building, interview coaching, job matching, and
					networking opportunities, among others.<br /><br />
					By leveraging the latest technology and industry insights, we aim to simplify and streamline
					the job search process for candidates, making it easier for them to identify and apply for
					relevant job openings. This is particularly useful for recent graduates, professionals looking
					to switch careers, or individuals returning to the workforce after a break.<br /><br />
					Overall, we are a one-stop solution for placement opportunities and can provide a valuable
					resource for job seekers looking to enhance their chances of landing their dream job by providing
					them with the necessary tools, guidance, and support throughout the job search process.
				</p>
			</div>
		</div>
		<!--
		<div class="flex basis-1/2 flex-col justify-center gap-6 p-8 font-poppins text-lime">
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
			<img
				class="w-2/3 self-center transition-all delay-100 ease-in-out hover:scale-110 hover:brightness-105"
				src={proposalPresentation}
				alt="proposal presentation"
			/>
		</div>
		<div class="relative flex basis-1/2 justify-center">
			<div class="chat chat-start absolute top-36 right-10 text-2xl font-extrabold">
				<div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
			</div>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 500 500"
				width="100%"
				id="blobSvg"
				filter="blur(qs0px)"
				style="opacity: 1;"
				transform="rotate(qs0)"
				><image
					x="0"
					y="0"
					width="100%"
					height="100%"
					clip-path="url(#shape)"
					href="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
					preserveAspectRatio="none"
				/>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color: rgb(238, 205, 163);" />
						<stop offset="100%" style="stop-color: rgb(239, 98, 159);" />
					</linearGradient>
				</defs>
				<clipPath id="shape"
					><path id="blob" fill="url(#gradient)">
						<animate
							attributeName="d"
							dur="10000ms"
							repeatCount="indefinite"
							values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
						/>
					</path></clipPath
				></svg
			>
		</div>-->
	</section>
	<section class="px-7 pt-7 md:px-20 md:pt-20">
		<!-- class="relative flex h-full w-full flex-wrap justify-center px-10 pt-10 md:h-screen" -->
		<div
			class="card bg-gradient-to-br from-layertwo-neon-three via-layertwo-neon-two to-layertwo-neon-one font-poppins text-olive shadow-xl lg:card-side"
		>
			<figure><img src={placementPlanning} alt="Album" /></figure>
			<div class="card-body lg:w-2/3">
				<h1 class="card-title text-2xl font-bold lg:text-5xl">PLACEMENT PLANNING</h1>
				<p class="lg:text-lg">
					Placement planning is a crucial process that involves identifying and preparing for
					potential job opportunities for candidates. A comprehensive placement plan typically
					includes several key steps, such as understanding the candidate's career goals and
					aspirations, assessing their skills and qualifications, identifying potential job
					openings, and handling the whole interview process with the companies and industries
					offering us with these job openings.<br /><br />
					Overall, a well-designed placement plan is critical in helping candidates navigate the placement
					process and find suitable employment opportunities. By providing candidates with the necessary
					support, guidance, and resources, placement planning can help ensure that candidates find meaningful
					and fulfilling jobs that align with their aspirations. At the core, we want to make sure a
					good placent process occours both for the candidates as well as the companies.
				</p>
			</div>
		</div>
		<!--
		<div class="flex basis-1/2 flex-col justify-center gap-6 p-8 font-poppins text-olive">
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
			<img
				class="w-2/3 self-center transition-all delay-100 ease-in-out hover:scale-110 hover:brightness-105"
				src={placementPlanning}
				alt="placement planning"
			/>
		</div>
		<div class="relative flex basis-1/2 justify-center md:-order-1">
			<div class="chat chat-start absolute top-1/3 right-10 text-2xl font-extrabold">
				<div class="chat-bubble chat-bubble-secondary">Ahh Shit! Here we go again</div>
			</div>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 500 500"
				width="100%"
				id="blobSvg"
				style="opacity: 1;"
				transform="rotate(qs152)"
				><image
					x="0"
					y="0"
					width="100%"
					height="100%"
					clip-path="url(#shape)"
					href="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1935&amp;q=80"
					preserveAspectRatio="none"
				/>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color: rgb(238, 205, 163);" />
						<stop offset="100%" style="stop-color: rgb(239, 98, 159);" />
					</linearGradient>
				</defs>
				<clipPath id="shape"
					><path id="blob" fill="url(#gradient)">
						<animate
							attributeName="d"
							dur="10000ms"
							repeatCount="indefinite"
							values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
						/>
					</path></clipPath
				></svg
			>
		</div>-->
	</section>
	<section class="p-7 md:p-20">
		<div
			class="card bg-gradient-to-br from-layerthree-violet-three via-layerthree-violet-two to-layerthree-violet-one font-poppins text-mist shadow-xl lg:card-side"
		>
			<figure><img src={greatTalents} alt="Album" /></figure>
			<div class="card-body lg:w-2/3">
				<h1 class="card-title text-2xl font-bold lg:text-5xl">HIRING GREAT TALENTS FOR YOU</h1>
				<p class="lg:text-lg">
					Hiring great talent is essential for any organization that wants to achieve its long-term
					goals and objectives. However, identifying and attracting top talent can be a challenging
					and time-consuming process. To overcome these challenges, we ensure a well-designed
					recruitment strategy that focuses on identifying, attracting, and retaining the best
					candidates.<br /><br />
					Our principle goals are to ensure a well communicated medium between the candidates and the
					job providing companies and organizations, so that both the parties can gain something valuable
					through the process.
				</p>
			</div>
		</div>
		<!--
		<div class="flex basis-1/2 flex-col justify-center gap-6 p-8 font-poppins text-mist">
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
			<img
				class="my-8 w-2/3 self-center transition-all delay-100 ease-in-out hover:scale-110 hover:brightness-105"
				src={students}
				alt="students"
			/>
		</div>
		<div class="relative flex basis-1/2 flex-col justify-center md:flex-row">
			<div class="chat chat-start absolute top-28 right-0 text-2xl font-extrabold">
				<div class="chat-bubble chat-bubble-accent">OMAGAH! They are really hiring</div>
			</div>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 500 500"
				width="100%"
				id="blobSvg"
				style="opacity: 1;"
				><image
					x="0"
					y="0"
					width="100%"
					height="100%"
					clip-path="url(#shape)"
					href="https://images.unsplash.com/photo-1604803778594-21cb327c8f6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
					preserveAspectRatio="none"
				/>
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style="stop-color: rgb(238, 205, 163);" />
						<stop offset="100%" style="stop-color: rgb(239, 98, 159);" />
					</linearGradient>
				</defs>
				<clipPath id="shape"
					><path id="blob" fill="url(#gradient)">
						<animate
							attributeName="d"
							dur="10000ms"
							repeatCount="indefinite"
							values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
						/>
					</path></clipPath
				></svg
			>
		</div>-->
	</section>
</main>
