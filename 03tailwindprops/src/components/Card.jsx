import React from 'react'

function Card() {
  return (
    <div>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://media.licdn.com/dms/image/D4D03AQE2tzfipn-yZQ/profile-displayphoto-shrink_800_800/0/1712704110862?e=1724284800&v=beta&t=evFNkVPFZEZAyUWP1V1OUnGK9lHMO9wHM0aSjlv_uDY" alt="" width="384" height="512"/>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                    R I K
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                    Software Engineer,Microsoft
                </div>
                </figcaption>
            </div>
            </figure>

    </div>
  )
}

export default Card