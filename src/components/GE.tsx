import { Link } from "react-router-dom"
import Fig from "./Fig";

const GE = () => {
    return (
        <div className="mx-auto max-w-[720px] text-black dark:text-white text">
            <h1>Computer Hardware</h1>
            <p>Have you ever wondered what makes your computer work? The black box of magic on your desk (or, well, the black laptop of magic) might actually not be so magical! Your computer is made up of a lot of components working together, which allows you to do things like browse the web. Some of these components are the CPU, the GPU, and the motherboard.</p>
            <p>First of all, there’s the most obvious: the CPU. Also called the “Central Processing Unit” or just “processor,” it’s what… well, processes numbers! If you run the calculator on any computer, the CPU is what calculates the numbers. It also calculates other things, like <Link to="/pl">running programs</Link>, <Link to="/os"></Link>, and <Link to="/ai">training AIs</Link>. However, there’s something else that has to be calculated, or, well, displayed: graphics!</p>
            <p>If you ever used a computer, I can almost guarantee that the computer has had the capability to display images on the screen. However, this is actually not the CPU’s job to do. This is because the CPU is busy doing calculations to run your apps. Because of this, we need another thing. This “thing” is called the GPU, or “Graphics Processing Unit.” Usually just shortened to “graphics card,” this is what calculates the graphics on your computer (at this point, it’s kinda obvious). Of course, this doesn’t tell you anything about how the CPU and GPU interact, which is yet another job (man, these components are really lazy, aren’t they?)</p>
            <p>Another thing (and the last thing we’ll cover) is the motherboard. A motherboard is kind of like the middleman between all of the components: it delivers power from the PSU (another component called the power supply unit) to the CPU and GPU, gets the memory from the RAM sticks and gives it to the CPU, and lots more. RAM stands for “Random Access Memory”, which is basically the computer’s short term memory. It takes care of all the running apps. The motherboard is also where you place most of the components, such as the CPU and RAM sticks.</p>
            <p>While this is a lot of knowledge that you need to know, for most people, it’s just fun fact knowledge. You can certainly just continue to think of your computer or laptop as a “magical black box,” but knowing what actually happens in it won’t hurt! The world of computers is very interesting, and if you want to learn more, you can do so by reading about <Link to="/pl">Programming Languages</Link>, <Link to="/os">Operating Systems</Link>, and <Link to="/ai">Artificial Intelligence</Link>.</p>
            <Fig src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Computer-motherboard.jpg/440px-Computer-motherboard.jpg" caption="Example of Motherboard Souce: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Computer-motherboard.jpg/440px-Computer-motherboard.jpg" />
        </div>
    )
}

export default GE;
