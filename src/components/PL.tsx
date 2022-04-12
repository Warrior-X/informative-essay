import { Component } from "react";
import Fig from "./Fig";

export default class PL extends Component {
    render() {
        return (
            <div className="mx-auto max-w-[720px] text-black dark:text-white text">
                <h1>What are programming languages?</h1>
                <p>
                    Technology and computers are appearing everywhere, and even
                    now, different technologies are appearing and are being
                    changed. If you think about it, technology is everywhere,
                    not just on your computer. Even the things that dispense
                    paper based on movement have some level of technology in
                    them. But how do they really function and work? The answer
                    is programming languages. In this chapter, we will discuss
                    what programming languages are, what they can do, and how
                    the computer understands it.{" "}
                </p>
                <p>
                    Programming languages serve the same purpose as languages
                    have in the real world. There are many different types of
                    programming languages, such as Python, Ruby and C++, among
                    many others. However, instead of using them to communicate
                    with other people, we use programming languages to
                    communicate with digital systems, such as a computer.
                    Usually, we are just giving the computer a set of
                    instructions to do. According to Computerscience, a computer
                    can only directly understand some code, called “binary”.
                    Every other language must be converted into binary in order
                    for the code to run, or start working. This process is
                    called compiling. Compilation errors occur when the code
                    cannot convert correctly. A common example of this is a
                    misspelling of a keyword.
                </p>
                <Fig
                    src="pl1.jpeg"
                    caption="Example of a SyntaxError in Python"
                />
                <p>
                    Computers aren't very smart, they just read the code. Even
                    if you make just a simple typo, they decide they don't
                    understand anything and nothing works. Just remember,
                    programming languages are just a way to give instructions to
                    a computer. But how far do these “instructions” go, and why
                    did we need them in the first place?
                </p>
                <p>
                    The whole point of having programming languages is to be
                    able to do things we humans couldn't do ourselves. Imagine
                    having to accurately count exactly 1000 seconds. No human
                    could do that perfectly, but computers can. As technology
                    advances, computers become more and more able. Now,
                    programming languages can do just about anything. They can
                    make robots move, see things and react appropriately, and
                    even play games together(robot soccer?). Some robots can
                    even lead people to seats and cook food. Computers
                    classified as supercomputers [definition] can help predict
                    the weather or make a trajectory path for a spaceship
                    landing on the moon, or even on Mars. All of this stuff may
                    not seem important now, but in the future they will be
                    incredibly useful. Without computers, we wouldn't be able to
                    do any of this stuff. Computerscience says that computers
                    process large amounts of complex data that we humans can't
                    do ourselves.{" "}
                </p>
                <p>
                    In order to speak a language, a person has to learn it
                    first. The same can be said for a computer. It turns out
                    that the computer does things differently for different
                    languages. According to the University of Hawaii, with
                    low-level languages such as C++, the code must be turned
                    into a special binary file in order for the computer to run
                    it. These languages are called compiled languages. In other
                    languages, such as Python and Ruby, there is something
                    called an interpreter. This interpreter compiles the code
                    into binary and runs it at the same time. So, these
                    languages, named interpreted languages for obvious reasons,
                    often run slower compared to compiled languages. Java is a
                    mix up of both types of languages. Java runs by converting
                    into bytecode, a different type of language. This code can
                    then be run on any operating system that has the java
                    interpreter on it. These are called virtual machine
                    languages. They are both fast, and they don't need a new
                    file to run.{" "}
                </p>
                <p>
                    This is what a programming language is, what it is used for,
                    and how the computer understands it. A programming language
                    is just like a language used to talk with computers. It is
                    used for doing things we humans can't do ourselves because
                    it is too complex. The computer understands it by converting
                    it into binary, a different language that the computer can
                    instantly understand. These languages are called low-level
                    languages. In the next chapter, we will talk more about
                    these languages and how they work.
                </p>

                <h1>High-Level Languages</h1>

                <p>
                    Now that you know what programming languages are, it's time
                    to break them down some more. Programming languages are
                    usually classified into two types. There are low-level
                    programming languages and high level programming languages.
                    High level languages are generally easier to understand from
                    the perspective of a non-programmer, and they do not require
                    the programmer to modify things such as memory. This is what
                    separates high-level and low-level languages, and is also
                    why they are usually the first languages people learn.
                    Python, Java, and C# are all very well received high level
                    programming languages.{" "}
                </p>

                <Fig src="pl4.jpeg" caption="Python Logo" />

                <p>
                    Python is one of the most famous and popular high-level
                    programming languages ever invented, and it is still widely
                    used today. According to Britannica, it was created by the
                    famous Dutch programmer Guido van Rossum in 1991. It is what
                    we call an object-oriented language, which means that its
                    code usually deals with objects, such as classes. So, people
                    can make classes such as a house and give it some special
                    features such as color and design. This made it much easier
                    to deal with complex programs because coders could think
                    about their code in a higher level, instead of just words on
                    a screen. According to the official Python website, Python
                    was designed to be a language that was relatively easy to
                    use in comparison to other languages at the time because it
                    used indents instead of brackets to group code and could
                    execute complex things in just a few lines. Python also has
                    built-in data structures[definition], such as a list or a
                    set. It is also easy to comprehend from either another
                    coder's perspective or from a person who does not understand
                    the syntax(the words in the language)[definition]. For
                    example, the code for displaying the text “Hello World” is
                    very simple.{" "}
                </p>
                <p>
                    This quality is called readability[definition]. However, the
                    large downside of Python is that it is very slow. This is
                    because Python turns into machine code[see previous chapter]
                    as it is running, which delays the program. This problem is
                    nonexistent in some other languages, such as Java.{" "}
                </p>
                <Fig src="pl6.png" caption="Java Logo" />
                <p>
                    Java, unlike Python, doesn't compile during its runtime.
                    However, it is also very popular and is still used today.
                    According to Britannica, Java was created by Sun
                    Microsystems[definition] in 1995. It was originally designed
                    to help the World Wide Web[definition]. It was equipped with
                    tools that could make it behave like a low-level language,
                    but is still considered a high-level language because of
                    readability. Nowadays, the Java website states that Java is
                    used to program “applets” such as games, communication
                    systems, calculating systems, and make 3D models. It is also
                    used to program things like phones. The University of Hawaii
                    says Java runs by converting its code into a type of machine
                    code called byte code. This is then run on an operating
                    system, which should first have the Java interpreter
                    installed on it. Java is what is known as a virtual machine
                    language, so it doesn't need a whole new file to run but it
                    also is very fast, which shows it has qualities of both
                    low-level and high-level languages. But we needed a place to
                    put Java, and it was more similar to high-level languages
                    anyway, so that's why it is in the high-level language
                    section. Now, back to object oriented programming languages.{" "}
                </p>
                <Fig src="pl5.png" caption="C# Logo" />
                <p>
                    C# is another high-level object oriented language. It is
                    different from the languages C and C++, but it does have
                    some relation to them. According to Britannica C# was
                    originally developed by Anders Hejlsberg in 2000. Its syntax
                    is similar to C++, Java, C, and Javascript but it is usually
                    used to make applications and games, whereas C++ and C are
                    used in industrial programming and are used to make things
                    like operating systems. Microsoft says that because C# is
                    object oriented, you can use it to define types and what
                    they do, which makes it great for making games. To run the
                    source code[definition], it is first compiled into a
                    different language that is then compiled into machine code.
                    C# is still easier to read than machine code, but instead of
                    just plain “print” like Python, it has “Console.WriteLine”.
                    C# is a good all purpose programming language that can do
                    just about anything.{" "}
                </p>

                <p>
                    In conclusion, this is how high-level programming languages
                    work and what they are. Some examples of them are Python,
                    Java, and C#. What sets high-level languages apart from
                    low-level programming languages are their readability, but
                    most of these languages must be converted into machine code,
                    a low-level language, in order to run. However, maybe we
                    won't have to do this in the future. In fact, who knows what
                    programming languages will even be like in the future? We
                    may not know for sure, but we can take a few guesses.{" "}
                </p>

                <h1>Low-level Languages</h1>

                <p>
                    Now that you know what programming languages are, it is time
                    to distinguish between two types of languages. There are
                    low-level languages and high-level languages. Low-level
                    languages are usually faster and easier to understand for
                    the computer than high-level languages. However, high-level
                    languages are easier to understand for the reader of the
                    code. Some examples of low-level languages are C++, machine
                    language, and assembly language.{" "}
                </p>

                <Fig src="pl2.png" caption="C++ Logo" />
                <p>
                    C++ is one of the more well known low-level languages. It is
                    considered a low-level language because it requires
                    programmers to change the memory in order to run it.
                    According to Britannica, it was developed by Bjarne
                    Stroustrupin in 1995. This language is mainly used for
                    industrial programming. It was initially created as an
                    extension to C, hence the name C++, according to w3schools.
                    It is fast, and provides a lot of control over memory, which
                    is why it is considered a low-level language. However, it
                    has to have its memory tweaked to run it, which is why it is
                    a hard language to learn. C++ is found in many appliances
                    due to its relation to industrial programming. This is
                    probably why w3schools states that C++ is found in many
                    operating systems. However, all languages, including C++,
                    were invented so people could easily write code instead of
                    writing it in machine language.{" "}
                </p>
                <p>
                    Machine language is the most basic programming language, yet
                    it is the most essential. Machine language is code made of
                    1's and 0's, also called binary. It is the “lowest” of the
                    low-level languages, because it is the hardest to read.
                    However, according to Britannica, machine code can operate
                    almost instantly because the computer can instantly read and
                    understand it. It is also the only language the computer can
                    understand. So, all other languages must be converted, or
                    compiled[definition], into machine language before it can be
                    run, which is why machine language is the most low-level yet
                    essential language. Since binary is literally just 1's and
                    0's, machine language is obviously the hardest language to
                    both read and write since it doesn't even have letters.
                    According to Computerhope, machine language can vary within
                    models of processors because the commands they are made for
                    differ. However, code from other languages must go through
                    an assembly language in order to get to machine language.{" "}
                </p>
                <p>
                    Assembly language is essentially the helper of machine
                    language. It takes the source code from a different language
                    and translates it into machine code. Then, the computer
                    takes the machine code and runs it. This process is called
                    compiling, and almost every language must go through this
                    process for the computer to run the code. According to
                    Britannica, assembly code is much easier to read than
                    machine language. This is because it would have code such as
                    “add %d $t” rather than a string of just 0's and 1's.
                    Assembly language is the middleman between binary and other
                    languages. Assembly language is a way to convert higher
                    level languages into a set of operations done on
                    registers[definition:blocks of data you can move around].{" "}
                </p>

                <p>
                    These are some of the more well known low-level languages. A
                    low-level language is one that is fast but cannot be read
                    easily(just think about machine language). But why did we
                    need to name them low-level anyway? In the next chapter, we
                    will discuss high-level languages. They make up the majority
                    of languages that have to go through assembly language and
                    become machine language in order to be run.{" "}
                </p>

                <p>
                    Now that you know about the two main types of programming
                    languages, it's time to talk about what will happen next.
                    What is the future for programming languages? What will they
                    become, and how does it affect us? This chapter is mainly
                    just guesswork on how computer programming will work out.
                    Based on current evidence, it is likely that there will be
                    many more languages created in the future, more people will
                    learn how to code, and the syntax will become more and more
                    simple.{" "}
                </p>

                <p>
                    It is almost certain that there will be many more
                    programming languages created in the future. According to
                    Techrepublic, there will be many more languages tailored for
                    more specific jobs. For example, take HTML. Its only purpose
                    is to create websites. There will probably be more of these
                    kinds of languages, called declarative languages, in the
                    future as different problems pop up all over the place. It
                    is also likely that most of these languages will fail, which
                    has happened in the past as well. Techtarget compares spoken
                    languages to programming languages, saying that they have
                    both faded away, like the programming language Haskell and
                    the spoken language Latin. They still have some effect
                    today, but are no longer widely used. Declarative languages
                    will become more widespread because we already have many
                    general-purpose languages, such as Python. The thing with
                    declarative languages is that they can do more complex tasks
                    in less lines of code because they were designed that way.
                    So, more people will probably be able to learn this
                    simplified type of coding.{" "}
                </p>
                <p>
                    As more and more types of programming languages emerge,
                    there will probably be more people who are capable of
                    coding. According to Techrepublic, there would still be some
                    people who wouldn't know how to code, but many people would
                    at least know how to do it, even if they don't do it as a
                    job. There will still be developers in the world, just as
                    much as there will be chefs, teachers and other professions
                    we also need. We can definitely say that more people will
                    learn to code because there will likely be more languages
                    designed for beginners, like Scratch. Scratch is an easy
                    drag and drop coding language that teachers kids how to code
                    and tries to get them interested in coding. However, text
                    based languages will still be the main part of programming
                    languages, and for that we need to learn how to write them.{" "}
                </p>
                <Fig src="pl7.png" caption="HTML5 Logo" />
                <p>
                    We can safely assume that as time goes on and technology
                    advances, the syntax of programming languages will get
                    simpler. At some point, the syntax may just become plain
                    English. We're already pretty close to this. Take a language
                    such as Lolcode(2007), which is a very strange language.{" "}
                </p>
                <Fig src="pl3.jpeg" caption="LOLCODE Example" />
                <p>
                    The code shown above is surprisingly readable, even though
                    it looks weird and the spellings are completely wrong. If
                    more developers did something like Lolcode but made it less
                    as a joke and more serious, with better spellings and proper
                    grammar, it would be very close to pure English. This would
                    probably contribute to more people learning to code. This is
                    already starting to happen because our languages are slowly
                    going from machine language to things like Ruby, which is
                    made mostly of English words.{" "}
                </p>
                <p>
                    This is what will probably happen to programming languages
                    in the future. Although this is mostly just guesswork based
                    on facts, it is safe to say that there will be more
                    declarative languages, higher availability, and simpler
                    syntax. Due to its higher availability, maybe one day you
                    yourself will become a developer, or learn to code.{" "}
                </p>
            </div>
        );
    }
}
