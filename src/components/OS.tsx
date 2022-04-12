import { Component } from "react";
import os from "../public/os.jpeg"
import Fig from "./Fig";

export default class OS extends Component {
    render() {
        return (
            <div className="mx-auto max-w-[720px] text-black dark:text-white text">
                <h1>What is an Operating System, and what is it used for?</h1>
                <p>
                    An Operating System, commonly abbreviated as OS, is the
                    thing that allows your computer to run. It contains
                    everything that runs the programs (referred to as the
                    Program Execution [link to section]), the component that
                    manages the available resources (referred to as Memory
                    Management [link to section]), and lots more. It can be
                    compared to the brain of a human: it understands what
                    resources it has (for example, the amount of energy you
                    have) and what you need to do (for example, running to fetch
                    a cup of water) and distributes these resources for the body
                    to execute (in the computer sense, it gives programs
                    resources like memory and computer power and runs it).
                </p>
                <p>
                    It also allows for the computer to efficiently process input
                    and output. For example, if you have a printer linked to the
                    computer, it&apos;s the operating system (more specifically
                    the Kernel [link]) that converts the document into a format
                    that the printer can understand (using something called
                    Drivers [link]). It can also process input, such as a mouse
                    click (again, the kernel would use the mouse&apos;s driver
                    to process the information into a format the computer can
                    understand). If you want to learn more about this, go to I/O
                    Devices [link].
                </p>
                <h2>Usage in Personal Computers</h2>
                <p>
                    An Operating System is present in every computer, including
                    probably your personal computer. It&apos;s what allows
                    Chrome to run when you want to watch YouTube, what controls
                    what to do when the memory runs out, etc.
                </p>
                <p>
                    Most likely, your computer will be running Microsoft
                    Windows. This operating system is a well liked one because
                    of two main reasons. Thes first is that everyone uses it,
                    which means that there are a lot of apps made for it. If
                    there are a lot of apps, then that means that more people
                    will want to use it. The second reason Windows is so popular
                    is that it&apos;s easy to use. Unlike specialized operating
                    systems like Linux [link], you don&apos;t need to know much
                    about computers to be able to use Windows. If you want to
                    know more about Windows, refer to this section [link].
                </p>
                <p>
                    However, there are three operating systems that have most of
                    the computer market. If you want to learn more about them,
                    look here [link].
                </p>
                <h2>Usage in Servers & Mainframes</h2>
                <p>
                    Since every computer needs an Operating System to do
                    anything, it&apos;s obvious that servers [glossary] and
                    mainframes [glossary] need them too. However, most of these
                    systems have headless [glossary] operating systems, which
                    means that they don&apos;t have a GUI [link]. This is
                    because basically no one will be using the computers
                    physically, so it&apos;s okay if they don&apos;t have pretty
                    pictures displayed on the screen.
                </p>
                <p>
                    Most servers use Linux [link] as their operating system.
                    This is because of several reasons. First of all, Linux is
                    lightweight. This means that it doesn&apos;t cost too many
                    resources to run, which allows for more resources to be used
                    for program execution. The second reason is that Linux
                    isn&apos;t bloated with features that Windows has to make it
                    easier for users to understand. Because the people that are
                    maintaining the servers are usually experienced computer
                    users, they don&apos;t have to add things to simplify the
                    experience, which allows them to use Linux. Last, Linux can
                    be easily customized (and very flexible). For example, if
                    you need an operating system and mostly focuses on
                    processing numbers, you can probably easily edit the code of
                    the operating system to change a few things around.
                </p>
                <h2>Usage in Embedded Systems</h2>
                <p>
                    Because we&apos;re all surrounded by technology these days
                    -- It&apos;s present in refrigerators, thermostats, etc.
                    Because all of these take computers to operate, they need
                    operating systems. Because they don&apos;t have space to
                    have super powerful processors [glossary], they have to use
                    Linux [link] for their operating system, like servers.
                    However, another thing that causes them to have to do this
                    is the fact that they have to create their own GUI [link].
                    Because they often have a custom theme that their products
                    use (such as the standardized dark theme for Nest
                    thermostats). Since, as I mentioned, Linux is easily
                    customizable, it&apos;s basically the perfect operating
                    system.
                </p>
                <h1>Parts of an Operating System</h1>
                <p>
                    Because of the complexity of an operating system, it&apos;s
                    split into a few distinct parts that serve an individual
                    purpose. While most of these things do simple things (such
                    as letting programs interact with low-level programs), there
                    are a few important parts.
                </p>
                <h2>Kernel</h2>
                <p>
                    First of all, arguably the most important part of an
                    operating system is probably the kernel. The kernel is a
                    program at the core of the operating system and has absolute
                    control over everything. In fact, it&apos;s so instrumental
                    to the computer running that it&apos;s usually one of the
                    first things loaded when starting the computer (after the
                    bootloader, which loads the kernel).
                </p>
                <h3>Program Execution</h3>
                <p>
                    One part of the kernel is the program execution. This does
                    exactly what you think it does: it executes programs. While
                    you might think that programs should be able to run
                    themselves, this is not true. A program is just a bunch of
                    1&apos;s and 0&apos;s. Because of this, you need the kernel
                    to be able to process these instructions. The program
                    executor usually gives programs a way of interacting with
                    the I/O devices [link] without needing to know their
                    specific commands (this is the drivers [link] I talked about
                    in the introduction). Last, the program executor gives
                    priority to the programs, which lets it know which programs
                    to run first when it runs out of resources to run them all
                    at the same time.
                </p>
                <h3>Memory Management</h3>
                <p>
                    Another very important part of the kernel is memory
                    management, which controls memory space (the information
                    stored in RAM sticks [glossary] which stores temporary
                    information related to the current running programs). This
                    usually stores both running program instructions (what the
                    program tells the computer to do) and the program data1. The
                    kernel needs to decide how much memory each program is
                    allowed to use, and also what the computer should do if it
                    runs out of memory.
                </p>
                <h3>File Systems</h3>
                <p>
                    One last important thing that&apos;s in the kernel is the
                    file system. The file system is the system that the
                    computer&apos;s hard drive [glossary] or SSD [glossary] uses
                    to store the files and folders in your computer. When you
                    open the file explorer (on Windows) or file app (on macOS),
                    you are essentially asking the kernel to give you a list of
                    files in the current directory.
                </p>
                <h2>User Interface</h2>
                <p>
                    Another important part of an operating system is the user
                    interface. There are two main kinds of user interfaces: CLI,
                    or command line interface, and GUI, or graphical user
                    interface. When computers were first invented, there were
                    only CLIs, which meant that anyone using a computer could
                    only display text (at that time, it was considered a very
                    powerful computer if it could display colored text). Because
                    of this, there would just be a keyboard that inputs commands
                    into the computer and the computer would process the
                    commands (like a programming language).
                </p>
                <p>
                    However, when people started to adopt computers, it would be
                    a sharp learning curve if they had to memorize all the
                    commands a computer could execute and what they do. Because
                    of this, people created a GPU [glossary], which would do the
                    necessary calculations that have to do with drawing graphics
                    (basically images) to the screen. This evolved into the
                    graphical user interfaces we see today on everything from a
                    computer to a small thermostat to even a refrigerator!
                </p>
                <h2>Applications</h2>
                <p>
                    While some argue that this isn&apos;t part of the operating
                    system, I still think that it&apos;s worth mentioning since
                    the operating system has a big part to play in the execution
                    of it. An application is usually just a program that either
                    runs in the background or has an interface that can be used
                    to interact with the app. Applications usually simplify an
                    action that usually has to be done with possibly even
                    thousands of lines of code.
                </p>
                <h1>Popular Operating Systems</h1>
                <p>
                    Because different people&apos;s needs differ, different
                    operating systems have been developed to conform to the
                    needs of the people.
                </p>
                <h2>BSD</h2>
                <p>
                    Usually referring to its descendant operating systems, BSD
                    is a discontinued operating system based on Unix [glossary].
                    While it takes up almost no market share, it&apos;s famous
                    because of the things that it&apos;s contributed to the
                    knowledge of computers today1, which include the editor vi
                    and the C Shell. Today&apos;s internet protocols, including
                    File Transfer Protocol (ftp://), HyperText Transfer Protocol
                    (http://), and more were inspired/created by BSD. In fact,
                    the World Wide Web was first demonstrated using an operating
                    system based on BSD.
                </p>
                <h2>Linux</h2>
                <p>
                    Linux is an open-source operating system, also based on Unix
                    [glossary]. While this isn&apos;t exactly the most
                    well-known operating system, it&apos;s an important one in
                    the programming world. This is because of a few reasons.
                    First of all, Linux is easily customizable, which for some
                    reason developers really like. Another reason is that Linux
                    has many tools which are perfect for programming, such as
                    command line shells and others. However, as a normal user
                    doesn&apos;t need these features, they&apos;ll probably want
                    to use Windows.
                </p>
                <h2>Windows</h2>
                <p>
                    The most used operating system in the computer world is
                    Microsoft Windows. Microsoft Windows is a line of
                    proprietary operating systems that were primarily developed
                    to run on Intel processors, although they can mostly run on
                    any architecture. Most people use this because it&apos;s
                    very user friendly: it&apos;s easy to install and easy to
                    use. It doesn&apos;t take much knowledge to be able to use
                    Windows productively, unlike something like Linux where you
                    probably have to be able to memorize many commands before
                    you can get anywhere near productive (although arguably
                    Linux would be more productive if you can learn the correct
                    things).{" "}
                </p>
                <h2>macOS</h2>
                <p>
                    macOS is a line of operating systems made by Apple that are
                    also based on Unix. They are pre-loaded in Macintosh
                    computers and laptops, which means that most people who use
                    a laptop by Apple will be using macOS. This was also one of
                    the first operating systems to be able to support colored
                    graphics.
                </p>
                <Fig src={os} caption="OS Market Share" />
                <h1>Programs & Operating Systems</h1>
                <p>
                    If you&apos;ve ever used a computer, you probably have run a
                    program before. Whether it&apos;s a web browser like Chrome
                    or a desktop application like Photoshop, they all have a few
                    things in common: they run using operating systems, and they
                    usually can run on more than just one operating system (most
                    can run on WIndows & macOS).
                </p>
                <h2>Porting Programs</h2>
                <p>
                    Usually, the operating system provides an interface to the
                    processor for the programs, which allows the programs to
                    interact with the processor more easily. However, different
                    processors have different interfaces in different operating
                    systems, which makes porting difficult. Usually, you would
                    need to write a program again for each processor and
                    operating system you&apos;re targeting, which makes
                    development difficult. However, an app developer
                    doesn&apos;t have time to do all this, so they can use the
                    following methods.
                </p>
                <h3>Using Abstraction Layers</h3>
                <p>
                    The first method is to use abstraction layers. This means
                    that you code in a programming language [link to
                    Jason&apos;s essay] and the compiler [link to Jason&apos;s
                    essay] then creates a copy of the program for each
                    architecture you&apos;re targeting. This allows you to write
                    the program once and compile it into each architecture you
                    want. However, since it&apos;s computer-generated, it&apos;s
                    usually not as efficient as coding it yourself in assembler
                    (if you are making a program that needs a lot of computing
                    power, such as a game, this will be very important).
                </p>
                <h3>Using Standardized Protocols</h3>
                <p>
                    If you want to have complete control over your programs,
                    however, you can just follow a standardized protocol that
                    many operating systems follow. A standardized protocol is a
                    set of commands that all the operating systems and
                    architectures participating in the standardization
                    implement. The benefit of this is that you can write it
                    yourself, which allows you to get faster code than having
                    computers generate the code, while not having to create
                    dozens of versions of your software for each operating
                    system or architecture. However, this means that you&apos;ll
                    lose some of the bleeding-edge features that one CPU might
                    have, which still reduces the speed of your program.
                    However, the speed that you&apos;ll be able to run the
                    program at and the time you save will far outweigh the
                    consequences, and unless you&apos;re making a program that
                    does specific math calculations (which would probably not
                    need to be targeting many computers as it would run on just
                    one powerful computer) you probably won&apos;t need the
                    speed anyway. An example of a standardized protocol is
                    x86_64 Assembly, which was made by AMD and Intel (the two
                    biggest CPU manufacturers that take up over 99.9% of the
                    market).
                </p>
                <h2>Execution</h2>
                <p>
                    As mentioned in Parts of an Operating Systems § Kernel
                    [link], programs are executed on the program executor (duh).
                    They usually are assigned a section of memory [glossary],
                    which then stores its code and data. It&apos;s assigned a
                    program number (usually called the Program ID, shortened to
                    PID) and assigned a priority level (to determine whether to
                    run this program when the memory runs out).
                </p>
                Footnotes
                https://en.wikipedia.org/wiki/Operating_system#Program_execution
            </div>
        );
    }
}
