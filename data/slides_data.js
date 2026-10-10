window.SLIDES_DATA = {
  "ch1": [
    {
      "slide_num": 1,
      "slide_text": "Operating SystemsCSC4320, CSC6320FALL 2026Dr. Roya Hosseini\n\nChapter 1: Introduction and Operating-System Structure\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 2,
      "slide_text": "\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCopyright and Use Notice\n\nThese slides were prepared by Dr. Roya Hosseini for\n\nCSC4320, CSC6320: Operating Systems at Georgia State University.\n\nThese materials are provided for instructional use only.\n\nUnauthorized copying, posting, sharing, selling, or redistribution of these materials is not permitted\n\nwithout written permission from the instructor.\n\n\u00a9 Dr. Roya Hosseini, Georgia State University, Fall 2026\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 3,
      "slide_text": "Chapter 1: Introduction and Operating-System Structure\n  - 1.1 Operating-System Fundamentals\n  - 1.2 Computer-System Organization\n  - 1.3 Privileged Execution\n  - 1.4 Interrupts, Exceptions, and Traps\n  - 1.5 System Calls and APIs\n  - 1.6 Operating-System Architecture\n  - 1.7 System Boot and Initialization\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 4,
      "slide_text": "CHAPTER MAP\n\nBy the end of this chapter, you can explain the OS as a control layer\n\n03\n\n01\n\nPurpose\n\nInterface, abstraction, resource manager\n\n02\n\nMechanism\n\nModes, interrupts, traps, system calls\n\n03\n\nDesign\n\nMonolithic, layered, microkernel, modular, hybrid\n\n04\n\nStartup\n\nFirmware \u2192 bootloader \u2192 kernel \u2192 services\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Main Types of Interfaces:\nCommand Line Interface (CLI)\nGraphical User Interface (GUI)\nTouchscreen Interface\nKey OS Abstractions\nProcess: Hides the raw CPU, making a running program look like it owns the processor entirely through time-sharing.\nVirtual Memory: Hides physical RAM limits and disk drives, giving each program a large, private, and continuous block of memory.\nFile System: Hides disk tracks, sectors, and read/write heads, presenting data as named files inside folders.\nDevice Drivers: Hides specific hardware controller protocols, offering a standard interface for input and output devices.\nSystem Calls: Hides kernel-level operations, providing a safe programming API for software to request OS services.\nA monolithic operating system is an architecture where the entire system\u2014including core services like process and memory management, file systems, and device drivers\u2014runs together inside a single large kernel and memory space",
      "media": []
    },
    {
      "slide_num": 5,
      "slide_text": "SECTION 1.1\n\nOperating-System Fundamentals\n\nWhat the operating system provides\u2014and why every application depends on it\n\n1.1 / 7\n\n04\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 6,
      "slide_text": "1.1 FUNDAMENTALS\n\nAn operating system provides abstractions and control\n\n05\n\nAbstractions make hardware usable\n\n\u2022 Files instead of raw disk sectors\n\u2022 Processes instead of direct CPU control\n\u2022 Virtual memory instead of physical addresses\n\u2022 Sockets instead of network-controller commands\n\nControl keeps the system safe\n\n\u2022 Allocates competing resources\n\u2022 Prevents unauthorized access\n\u2022 Coordinates concurrent activity\n\u2022 Detects and handles errors\n\nOne system, two core jobs: make the machine convenient and manage it correctly.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Abstraction in an operating system (OS) is the process of hiding raw, complex hardware details and presenting a clean, simplified model to users and programs. It turns physical components\u2014like transistors, disk sectors, and memory chips\u2014into organized, easy-to-use concepts like files, processes, and windows",
      "media": []
    },
    {
      "slide_num": 7,
      "slide_text": "1.1 FUNDAMENTALS\n\nThe OS sits between programs and physical devices\n\n06\n\nUsers\n\nGoals and commands\n\nApplications\n\nBrowsers, compilers, games\n\nOperating system\n\nServices + policies\n\nHardware\n\nCPU, memory, devices\n\nApplications request services; the OS decides how and when hardware is used.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 8,
      "slide_text": "1.1 FUNDAMENTALS\n\nTwo complementary views explain what an OS does\n\n07\n\nExtended / virtual machine\n\n\u2022 Hides inconvenient hardware details\n\u2022 Offers stable, higher-level operations\n\u2022 Creates useful illusions such as many processes and large memory\n\nResource manager\n\n\u2022 Tracks ownership and availability\n\u2022 Schedules and allocates resources\n\u2022 Resolves conflicts using policies\n\nMechanism answers \u201chow?\u201d Policy answers \u201cwhich choice?\u201d\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 9,
      "slide_text": "1.1 FUNDAMENTALS\n\nFive responsibilities define the OS control surface\n\n08\n\nPROCESS\n\nCreate, schedule, synchronize, terminate\n\nMEMORY\n\nAllocate, protect, map, reclaim\n\nSTORAGE\n\nName, organize, persist, retrieve\n\nDEVICES\n\nControl, buffer, cache, abstract\n\nSECURITY\n\nAuthenticate, authorize, isolate, audit\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Creating a Process",
      "media": []
    },
    {
      "slide_num": 10,
      "slide_text": "1.1 FUNDAMENTALS\n\nOperating systems evolved to improve utilization and response\n\n09\n\nSystem type\n\nPrimary goal\n\nDefining behavior\n\nBatch\n\nThroughput\n\nJobs run in groups with little interaction\n\nMultiprogramming\n\nCPU utilization\n\nSeveral jobs remain in memory\n\nTime-sharing\n\nResponsiveness\n\nCPU rapidly switches among interactive users\n\nReal-time\n\nDeadline correctness\n\nResults must arrive within timing constraints\n\nHistorical categories overlap in modern systems.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 11,
      "slide_text": "Principles Of Multiprogramming And Time-sharing.",
      "notes_text": "",
      "media": [
        "ch1_slide11_image1.png"
      ]
    },
    {
      "slide_num": 12,
      "slide_text": "CHALLENGE 1",
      "notes_text": "",
      "media": [
        "ch1_slide12_image2.png"
      ]
    },
    {
      "slide_num": 13,
      "slide_text": "solution\n\nExpected: 150, 120\nWithout multiprogramming, the total time is the same regardless of the number of I/O devices, since the I/O phases do not overlap, 60 + 90 = 150 time units.\nWith multiprogramming, p1 runs from 0 to 10, followed by the I/O phase from 10 to 60. p2 starts as soon as p1's compute phase terminates and runs from 10 to 40.\nAt time 40 the I/O device is still busy and thus p2's I/O phase is delayed until time 60. Thus p2 terminates at time 120.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 14,
      "slide_text": "Challenge 2",
      "notes_text": "",
      "media": [
        "ch1_slide14_image3.png"
      ]
    },
    {
      "slide_num": 15,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch1_slide15_image4.png",
        "ch1_slide15_image5.png"
      ]
    },
    {
      "slide_num": 16,
      "slide_text": "Modern OS categories reflect deployment constraints\n\nEmbedded & Real-Time Operating Systems (RTOS)\n  - Constraints: Extremely limited memory (often kilobytes), low power consumption, and strict deterministic timing requirements.\n  - OS Characteristics: Minimal footprint, no complex UI, and guaranteed response times where missing a deadline constitutes a system failure.\n  - Examples: FreeRTOS, VxWorks, QNX.\nMobile Operating Systems\n  - Constraints: Strict battery life preservation, unpredictable cellular connectivity, diverse hardware sensors, and touch-based user interaction.\n  - OS Characteristics: Aggressive background process suspension, heavy optimization for power-efficient ARM architectures, and strict app sandboxing for security.\n  - Examples: Android, iOS.",
      "notes_text": "FreeRTOS is a popular, open-source real-time operating system kernel designed for microcontrollers and small embedded devices. embedded systems engineers, IoT device manufacturers, and major semiconductor companies to run lightweight software on microcontrollers. FreeRTOS is owned and managed by Amazon Web Services (AWS), which took over stewardship of the project in 2017.\nVxWorks is a real-time operating system (RTOS) developed by Wind River Systems (a subsidiary of Aptiv) for use in mission-critical embedded systems. Aerospace and Defense, Medical Devices, Industrial and Automotive.\nQNX is a commercial Unix-like real-time operating system, aimed primarily at the embedded systems market.",
      "media": []
    },
    {
      "slide_num": 17,
      "slide_text": "Desktop & Workstation Operating Systems\n  - Constraints: High demand for user-facing responsiveness, broad compatibility with legacy peripherals, and support for diverse, unpredictable user workloads.\n  - OS Characteristics: Heavy emphasis on graphical user interfaces (GUIs), complex multitasking schedulers that prioritize the active window, and extensive driver frameworks.\n  - Examples: Windows, macOS, Linux (Desktop).\nServer & Enterprise Operating Systems\n  - Constraints: Maximum throughput, high availability (uptime), scalable multi-core processing, and headless (no GUI) remote management.\n  - OS Characteristics: Schedulers optimized for long-running background tasks rather than UI responsiveness, advanced networking stacks, and robust virtualization support.\n  - Examples: Linux (RHEL, Ubuntu Server), Windows Server.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 18,
      "slide_text": "Cloud-Native & Distributed Operating Systems\n  - Constraints: Massive scale across thousands of commodity servers, rapid provisioning speeds, and ephemeral (temporary) infrastructure lifetimes.\n  - OS Characteristics: Minimalist architectures stripped of all non-essential tools to reduce boot times and attack surfaces, often designed specifically to run containers or microVMs.\n  - Examples: Talos Linux, Fedora CoreOS, AWS Bottlerocket.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 19,
      "slide_text": "1.1 FUNDAMENTALS\n\nModern OS categories reflect deployment constraints\n\n10\n\nCategory\n\nEnvironment\n\nDesign emphasis\n\nA smartphone OS is simultaneously interactive, multicore, networked, and security-sensitive.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nOS category | Typical environment | Examples\nGeneral-purpose desktop/server OS | Laptops, desktops, and servers | Windows, macOS, Linux\nDistributed systems | Multiple connected computers working together | Cluster and cloud environments\nEmbedded OS | Dedicated devices with limited resources | Routers, appliances, automotive controllers\nMobile OS | Smartphones and tablets | Android, iOS\nReal-time OS | Systems with strict timing requirements | FreeRTOS, VxWorks, QNX",
      "notes_text": "FreeRTOS is a popular, open-source real-time operating system kernel designed for microcontrollers and small embedded devices. embedded systems engineers, IoT device manufacturers, and major semiconductor companies to run lightweight software on microcontrollers. FreeRTOS is owned and managed by Amazon Web Services (AWS), which took over stewardship of the project in 2017.\nVxWorks is a real-time operating system (RTOS) developed by Wind River Systems (a subsidiary of Aptiv) for use in mission-critical embedded systems. Aerospace and Defense, Medical Devices, Industrial and Automotive.\nQNX is a commercial Unix-like real-time operating system, aimed primarily at the embedded systems market.",
      "media": []
    },
    {
      "slide_num": 20,
      "slide_text": "[TABLE]\nPractical area | Windows 11 | macOS | Linux\nWho controls it? | Microsoft develops the OS; many companies build the computers | Apple develops both the OS and Mac hardware | Open-source communities and companies develop distributions\nHardware choices | Very broad: inexpensive laptops, gaming PCs, workstations, tablets | Limited to Apple Mac computers | Runs on many PCs; compatibility depends on hardware\nTypical users | General users, businesses, gamers, engineers | Apple users, creative professionals, developers | Developers, researchers, administrators, cybersecurity users\nInstallation | Usually preinstalled on PCs | Preinstalled on Macs | Usually installed by the user or organization\nUser experience | Familiar and flexible, but varies across manufacturers | Consistent and polished because Apple controls the hardware | Varies by distribution and desktop environment\nSoftware installation | Microsoft Store or downloaded .exe/.msi installers | App Store, .dmg files, or Homebrew | Package managers such as APT, DNF, or Pacman\nProgramming | Visual Studio, VS Code, PowerShell, Windows Subsystem for Linux | Unix terminal, Xcode, Homebrew | Native Unix/Linux environment and extensive development tools\nSecurity | Strong built-in security but frequently targeted because of its large user base | Strong platform controls and Apple integration | Strong permissions and rapid updates; security depends on configuration\nCustomization | Moderate | Limited | Very high\nCommand line | PowerShell, Command Prompt, and WSL | Unix-based Terminal | Native shell and GNU/Linux tools\nCommon file system | NTFS | APFS | ext4, Btrfs, or XFS\nKernel | Windows NT hybrid kernel | XNU hybrid kernel | Monolithic, modular Linux kernel",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 21,
      "slide_text": "SECTION 1.2\n\nComputer-System Organization\n\nThe hardware building blocks the OS must coordinate\n\n1.2 / 7\n\n11\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 22,
      "slide_text": "1.2 ORGANIZATION\n\nA computer system is a set of components sharing data paths\n\n12\n\nCPU / CORES\n\nSystem Interconnect\n\nSTORAGE\n\nNETWORK\n\nDISPLAY\n\nINPUT\n\nsystem interconnect / bus\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nRAM",
      "notes_text": "The CPU performs computation,\nRAM holds active instructions and data,\nstorage retains information permanently,\nand I/O devices communicate with the external world.\nThe operating system manages and coordinates all these components.\nFor example, when a student opens PowerPoint:\nPowerPoint is stored permanently on the SSD.\nThe OS loads its required instructions and data into RAM.\nA CPU core fetches its instructions from RAM.\nThe CPU processes them and writes results back to RAM.\nRAM is temporary; its contents normally disappear when power is removed.",
      "media": []
    },
    {
      "slide_num": 23,
      "slide_text": "1.2 ORGANIZATION\n\nDevice controllers let specialized hardware operate independently\n\n13\n\nController responsibilities\n\n\u2022 Operate a specific device type\n\u2022 Expose registers and command interfaces\n\u2022 Buffer data during transfers\n\u2022 Signal completion or errors\n\nOS responsibilities\n\n\u2022 Load and manage device drivers\n\u2022 Issue commands to controllers\n\u2022 Respond to interrupts\n\u2022 Coordinate DMA and memory access\n\nThe driver translates generic OS requests into device-specific operations.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Suppose we want to read a file from an SSD. The operating system does not directly manipulate the SSD\u2019s electronic circuits. It uses a device driver to send commands to the SSD controller. The controller performs the physical operation and reports completion to the OS.\nThe relationship among three different components:\nPhysical device \u2014 the actual hardware\nDevice controller \u2014 hardware that operates the device\nDevice driver \u2014 OS software that communicates with the controller\nA device controller is hardware. A device driver is software.",
      "media": []
    },
    {
      "slide_num": 24,
      "slide_text": "1.2 ORGANIZATION\n\nStored-program architecture keeps instructions and data in memory\n\n14\n\nFetch\n\nRead next instruction\n\nDecode\n\nInterpret operation\n\nExecute\n\nPerform work\n\nUpdate\n\nStore result / next PC\n\nInterrupts can redirect this cycle so the OS can respond to external events.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "CPU\uf0e8\nNo interrupts =>\nBefore discussing how an operating system manages a computer, we need to understand how the CPU runs a program.\nModern computers generally use a stored-program architecture, also called the von Neumann architecture. Both program instructions and program data are stored in memory.\nFor example, when Microsoft Word is running, memory contains both Word\u2019s machine instructions and the document data being processed. The CPU reads and executes those instructions through a repeating cycle.\u201d\nThen explain each box:\nFetch \u2014 read the next instruction\n\u201cThe CPU reads the next instruction from memory. The address of that instruction is normally stored in a special CPU register called the program counter, or PC.\u201d\nDecode \u2014 interpret the instruction\n\u201cThe control unit determines what the instruction means. Is it asking the CPU to add numbers, move data, compare values, or access memory?\u201d\nExecute \u2014 perform the work\n\u201cThe CPU performs the requested operation. For example, the ALU may add two values, the CPU may compare two numbers, or it may move data between registers and memory.\u201d\nUpdate \u2014 save the result and select the next instruction\n\u201cThe CPU stores the result when necessary and updates the program counter. Usually, the PC advances to the next instruction. A branch or jump instruction may change it to a different address.\u201d\nThe cycle then repeats millions or billions of times per second.\nInterrupts can redirect this cycle so the OS can respond to external events.",
      "media": []
    },
    {
      "slide_num": 25,
      "slide_text": "1.2 ORGANIZATION\n\nThe instruction cycle repeats until control is redirected\n\n15\n\nFETCH\n\nRead instruction\n\nDECODE\n\nInterpret operation\n\nEXECUTE\n\nPerform work\n\nWRITE BACK\n\nStore result\n\nCHECK EVENTS\n\nInterrupt pending?\n\nIf no event requires attention, the program counter identifies the next instruction and the cycle repeats.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "With interrupts=>\nWrite back\n\u201cIf the instruction produces a result, the result is stored in a CPU register or memory.\u201d\nCheck events\n\u201cAt an instruction boundary, the CPU can recognize a pending interrupt. If no interrupt requires attention, it continues with the next instruction. If an interrupt is pending and enabled, control transfers to an operating-system interrupt handler.\u201d\nWhat happens when an interrupt occurs?\n-No interrupt: The CPU uses the PC to fetch the next instruction and repeats the cycle.\n-Interrupt pending: The CPU saves the current execution state and transfers control to the appropriate OS interrupt handler.\nAfter the OS handles the event, it may:\nResume the interrupted program, or\nAllow the scheduler to run a different process.",
      "media": []
    },
    {
      "slide_num": 26,
      "slide_text": "1.2 ORGANIZATION\n\nParallel hardware can share memory or communicate by messages\n\n16\n\nDimension\n\nShared-memory system\n\nDistributed-memory system\n\nMemory\n\nOne address space\n\nPrivate memory per node\n\nCommunication\n\nLoads and stores\n\nMessages over an interconnect\n\nCoordination\n\nLocks and cache coherence\n\nProtocols and message ordering\n\nTypical scale\n\nMulticore / multiprocessor\n\nClusters and distributed systems\n\nMulticore: multiple execution cores within one processor package.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Memory\uf0e8\nModern computing systems often perform multiple operations simultaneously. The hardware can support this parallel work in two primary ways: processors may share memory, or separate computing nodes may exchange messages.\ntwo main ways multiple processors or computers cooperate:\n-Shared-memory: processors communicate by reading and writing the same memory.\n-Distributed-memory: independent computers communicate by sending messages.\nSharing memory is typical inside one computer; message passing is typical among separate networked computers.\n_ In a shared-memory system, multiple CPU cores or processors can access a common memory address space.\u201d\nA modern laptop is the easiest example:\nIt may have 8 or 12 CPU cores.\nAll cores access the same main memory.\nOne core can write a value into memory.\nAnother core can later read that value.\n_ Distributed-memory system\n\u201cIn a distributed-memory system, every node is a separate computer with its own CPU and private memory. One node cannot directly load data from another node\u2019s memory.\u201d\nInstead, nodes exchange messages through a network or high-speed interconnect.\nFor example, if Node A needs a result produced by Node B:\nNode B packages the result into a message.\nIt sends the message through the interconnect.\nNode A receives and processes it.\nPractical examples include:\nA university computing cluster\nA supercomputer\nCloud servers\nA distributed database\nHadoop or Spark clusters",
      "media": []
    },
    {
      "slide_num": 27,
      "slide_text": "SECTION 1.3\n\nPrivileged Execution\n\nHow the processor prevents applications from taking unrestricted control\n\n1.3 / 7\n\n17\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 28,
      "slide_text": "1.3 PRIVILEGE\n\nDual-mode operation separates application work from OS authority\n\n18\n\nProperty\n\nUser mode\n\nKernel mode\n\nRuns\n\nApplications\n\nOS kernel\n\nHardware access\n\nRestricted\n\nDirect and privileged\n\nAddress space\n\nUser-accessible regions\n\nKernel + system resources\n\nFailure impact\n\nUsually isolated\n\nCan affect the whole system\n\nThe CPU mode bit records the current privilege level.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Applications run with restricted authority in user mode, while the operating-system kernel runs with higher authority in kernel mode.\nUser mode\nUser mode is where ordinary applications normally execute, including:\nWeb browsers\nMicrosoft Word\nGames\nMedia players\nMost background applications\nApplications in user mode have restrictions:\nThey cannot execute privileged CPU instructions.\nThey cannot directly control hardware devices.\nThey cannot freely access kernel memory.\nThey cannot normally access another process\u2019s private memory.\nThey must request protected services from the OS.\nFor example, Word cannot directly command an SSD to write a document. It asks the OS through a system call, and the OS performs the operation after checking permissions and parameters.\nKernel mode\nKernel mode is where the OS kernel and usually many device drivers execute.\nCode in kernel mode can:\nExecute privileged instructions\nConfigure memory protection\nManage processes and threads\nAccess device-controller registers\nHandle interrupts\nControl CPU scheduling\nAccess protected system memory\nKernel-mode authority is necessary, but risky. A kernel or driver failure can freeze or crash the entire system.",
      "media": []
    },
    {
      "slide_num": 29,
      "slide_text": "[TABLE]\nProperty | Explanation\nRuns | Applications normally run in user mode; the kernel executes in kernel mode\nHardware access | Applications must request hardware services; the kernel can interact with controllers and protected hardware\nAddress space | User programs can access only permitted virtual-memory regions; the kernel can access protected kernel resources\nFailure impact | An application crash is normally isolated; a kernel failure may affect the whole system",
      "notes_text": "Dual-mode operation protects the computer by separating ordinary application execution from privileged OS operations. Applications run in user mode and must use system calls to request protected services. The kernel runs in kernel mode and can access hardware and system memory. This separation isolates most application failures, while kernel failures can affect the whole system.\nA practical comparison:\nIf Chrome crashes, you can normally reopen Chrome.\nIf the kernel crashes, Windows may show a blue screen, macOS may report a kernel panic, or Linux may produce a kernel panic.\nHow does an application receive an OS service?\nUse opening a file as the example:\n    - The application executes in user mode.\n    - It calls a function such as read().\n    - That function invokes a system call.\n    - CPU hardware switches execution to kernel mode.\n    - The OS validates the request and performs the protected operation.\n    - The OS returns the result.\n    - CPU execution returns to user mode.\nUser mode: Application requests read()\n\u2193 system call\nKernel mode: OS checks and performs operation\n\u2193 return\nUser mode: Application continues\nHow mode transitions happen\nExecution can enter kernel mode through:\nA system call intentionally requested by an application\nAn interrupt generated by hardware\nAn exception caused by the current instruction, such as division by zero or an invalid memory access\nThe OS handles the event and then returns to user mode when appropriate.",
      "media": []
    },
    {
      "slide_num": 30,
      "slide_text": "1.3 PRIVILEGE\n\nPrivileged instructions protect global system state\n\n19\n\nI/O control\n\nStart or configure devices\n\nMemory control\n\nChange page tables or protection\n\nInterrupt control\n\nEnable or disable interrupts\n\nProcessor control\n\nHalt CPU or change mode\n\nAttempt in user mode \u2192 hardware exception \u2192 kernel decides what happens\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Privileged instructions can affect the entire computer, so only trusted kernel code may execute them.\n1. I/O control\nExamples include:\nStarting an SSD operation\nConfiguring a network controller\nChanging display-controller settings\nCommunicating directly with device registers\nWhy is this privileged?\n\u201cImagine if two applications directly sent conflicting commands to the SSD controller. They could overwrite data or interfere with each other. Instead, applications request I/O through system calls, and the OS coordinates access through device drivers.\u201d\n2. Memory control\nExamples include:\nChanging page tables\nModifying memory-protection settings\nMapping physical memory\nGiving a memory page read, write, or execute permission\nWhy is this privileged?\n\u201cPage tables determine which memory a process can access. If an application could change them, it might read another program\u2019s passwords, alter kernel data, or bypass memory protection.\u201d\nOnly the OS should control address translation and protection.\n3. Interrupt control\nSome processor instructions can:\nDisable certain interrupts\nRe-enable interrupts\nConfigure interrupt handling\nWhy is this privileged?\n\u201cTimer interrupts allow the OS to regain control of the CPU. If an application could disable interrupts indefinitely, it might prevent the OS scheduler from running and take over the processor.\u201d\nThis is especially important for preemptive multitasking.\n4. Processor control\nExamples include:\nHalting the CPU\nChanging certain processor control registers\nConfiguring execution modes\nChanging memory-management or protection settings\nWhy is this privileged?\n\u201cIf an application could halt the processor, one program could stop the entire operating system.\u201d\nPrivileged instructions affect resources shared by the entire system, including devices, page tables, interrupts, and CPU control state. They may execute only in kernel mode. If user-mode code attempts one, the CPU raises an exception and transfers control to the kernel. Applications must request these services through system calls.",
      "media": []
    },
    {
      "slide_num": 31,
      "slide_text": "1.3 PRIVILEGE\n\nA timer guarantees the OS eventually regains control\n\n20\n\nKernel\n\nPrograms timer\n\nUser program\n\nRuns normally\n\nTimer\n\nCounts down\n\nInterrupt\n\nReturns to kernel\n\nWithout a timer, a runaway program could keep the CPU indefinitely.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "When the OS schedules a user program, it temporarily gives that program a CPU core. But how can the OS regain control if the program never voluntarily stops?\nA runaway program is a process that gets stuck in an infinite loop or consumes excessive CPU and memory resources, slowing down or freezing the entire operating system.\nHow the operating system prevents a program from controlling a CPU core forever\nBefore allowing a user program to run, the OS configures a hardware timer. When the timer expires, it interrupts the CPU and transfers control back to the kernel.\n1. Kernel programs the timer\n\u201cWhile executing in kernel mode, the OS sets the hardware timer to generate an interrupt after a specific interval.\u201d\nProgramming the timer is a privileged operation. A user program cannot disable or indefinitely postpone it.\n2. User program runs\n\u201cThe OS returns to user mode and allows the selected program\u2019s thread to execute.\u201d\nWhile it runs, the OS is not continuously executing on that core. The kernel is still present in memory, but the user program currently controls the CPU\u2019s instruction stream.\n3. Timer counts down\n\u201cThe timer operates independently of the user program. The CPU continues executing program instructions while the hardware timer tracks time.\u201d\n4. Timer generates an interrupt\n\u201cWhen the timer expires, it generates a hardware interrupt. The CPU pauses the user program, saves the necessary execution state, enters kernel mode, and runs the OS timer-interrupt handler.\u201d",
      "media": []
    },
    {
      "slide_num": 32,
      "slide_text": "1.3 PRIVILEGE\n\nA system call crosses a protected boundary and then returns\n\n21\n\nUser mode\n\nPrepare arguments\n\nTrap instruction\n\nEnter kernel mode\n\nKernel\n\nValidate + perform service\n\nReturn\n\nResume user mode\n\nHardware changes privilege under controlled rules; the application never flips the mode bit directly.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 33,
      "slide_text": "1.3 PRIVILEGE\n\nWhy applications cannot access hardware directly\n\n22\n\nIf direct access were allowed\n\n\u2022 One app could overwrite another\u2019s memory\n\u2022 Device commands could conflict\n\u2022 A program could disable interrupts\n\u2022 Secrets and credentials could be exposed\n\nWhat the OS adds\n\n\u2022 Validation before every sensitive operation\n\u2022 Fair allocation and scheduling\n\u2022 Isolation between protection domains\n\u2022 Auditable security policy\n\nProtection is enforced by hardware mechanisms and OS policy together.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 34,
      "slide_text": "SECTION 1.4\n\nInterrupts, Exceptions, and Traps\n\nThe events that transfer control to the kernel\n\n1.4 / 7\n\n23\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 35,
      "slide_text": "1.4 EVENTS\n\nControl transfers are classified by source and timing\n\n24\n\nEvent\n\nOrigin\n\nRelationship to instruction stream\n\nInterrupt\n\nExternal hardware\n\nAsynchronous\n\nException / fault\n\nCurrent instruction\n\nSynchronous\n\nTrap\n\nIntentional software event\n\nSynchronous\n\nTerminology varies slightly across architectures and textbooks; always identify source and intent.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 36,
      "slide_text": "1.4 EVENTS\n\nHardware interrupts announce external events\n\n25\n\nCommon sources\n\n\u2022 Keyboard or mouse input\n\u2022 Network packet arrival\n\u2022 Storage operation completion\n\u2022 Timer expiration\n\nKey property\n\n\u2022 Not caused by the instruction currently executing\n\u2022 May arrive between instructions\n\u2022 Usually handled by a device-specific routine\n\u2022 Can be masked or prioritized\n\nAsynchronous means the event is not predictably tied to the current instruction.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 37,
      "slide_text": "1.4 EVENTS\n\nExceptions and traps originate during instruction execution\n\n26\n\nExceptions / faults\n\n\u2022 Divide by zero\n\u2022 Invalid opcode\n\u2022 Page fault\n\u2022 Protection violation\n\nIntentional traps\n\n\u2022 System-call request\n\u2022 Breakpoint for debugging\n\u2022 Explicit software interrupt\n\u2022 Controlled entry to a service\n\nA page fault may be recoverable; an illegal instruction may terminate the process.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 38,
      "slide_text": "1.4 EVENTS\n\nInterrupt handling preserves state before running the handler\n\n27\n\nEvent\n\nHardware detects request\n\nSave\n\nPC and minimal state\n\nVector\n\nLocate handler\n\nHandle\n\nService the cause\n\nReturn\n\nRestore and resume\n\nThe interrupt vector maps event numbers to handler entry points.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 39,
      "slide_text": "1.4 EVENTS\n\nSynchronous and asynchronous events differ in reproducibility\n\n28\n\nQuestion\n\nSynchronous\n\nAsynchronous\n\nCaused by\n\nCurrent instruction\n\nExternal device or timer\n\nRepeatable?\n\nUsually at same instruction\n\nTiming may vary\n\nExamples\n\nFault, trap, system call\n\nI/O completion, timer\n\nDebugging clue\n\nInspect instruction and operands\n\nInspect device and timing state\n\nBoth can cause a mode switch into kernel mode.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 40,
      "slide_text": "SECTION 1.5\n\nSystem Calls and APIs\n\nHow programs request protected operating-system services\n\n1.5 / 7\n\n29\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "API, or Application Programming Interface a set of rules and protocols that allows different software applications to communica\nPayPal, Twitter/X, Slack, Google Maps, GitHub,",
      "media": []
    },
    {
      "slide_num": 41,
      "slide_text": "1.5 SYSTEM CALLS\n\nSystem calls are the kernel\u2019s controlled service interface\n\n30\n\nPROCESS\n\nfork, exec, exit, wait\n\nFILE\n\nopen, read, write, close\n\nDEVICE\n\nrequest, release, control\n\nINFORMATION\n\ntime, IDs, attributes\n\nCOMMUNICATION\n\npipe, socket, shared memory\n\nPROTECTION\n\npermissions, credentials\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "taxonomy of system calls \u2014 the idea that user programs can't touch hardware or kernel resources directly, so they go through a controlled \"service interface\" (the system call layer).\nProcess control \u2014 fork, exec, exit, waitThese manage the lifecycle of a process itself: creating a new process (fork), replacing its memory image with a new program (exec), terminating (exit), and waiting on a child process to finish (wait). This is the category students usually see first because it's central to how shells and process trees work.\nFile management \u2014 open, read, write, closeCalls that operate on files as an abstraction over storage devices. The kernel mediates all of this so it can enforce permissions and manage the underlying disk I/O.\nDevice management \u2014 request, release, controlSimilar to file management, but for I/O devices (disks, printers, etc.). A process must request a device, use it, and release it \u2014 the kernel arbitrates access since devices can't be shared arbitrarily.\nInformation maintenance \u2014 time, IDs, attributesCalls that let a process query or set system/process metadata \u2014 current time, process ID, user ID, file attributes, etc. Not doing \"work,\" just reading/writing bookkeeping data.\nCommunication \u2014 pipe, socket, shared memoryMechanisms for inter-process communication (IPC) \u2014 letting separate processes exchange data, either locally (pipes, shared memory) or over a network (sockets).\nProtection \u2014 permissions, credentialsCalls related to access control \u2014 checking or changing permissions, user/group credentials \u2014 enforcing who's allowed to do what.\nThe unifying theme (which is really the slide's thesis, stated in the title): all of these go through the kernel rather than being handled directly by user code, because the kernel is the only entity trusted to touch hardware and shared state safely. That's the \"controlled service interface\" framing.",
      "media": []
    },
    {
      "slide_num": 42,
      "slide_text": "1.5 SYSTEM CALLS\n\nA library wrapper prepares the system call for the kernel\n\n31\n\nApplication\n\nCalls read()\n\nC library\n\nPlaces number + arguments\n\nTrap\n\nCPU enters kernel\n\nKernel\n\nChecks and performs I/O\n\nReturn\n\nResult or error\n\nThe wrapper provides a convenient language-level function; the system call is the protected kernel entry.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Application: Calls read()The programmer just writes read(fd, buf, n) in their C code. From their perspective, it looks like an ordinary function call.\nC library: Places number + argumentsread() isn't actually a system call itself \u2014 it's a thin wrapper in the C standard library (glibc, for example). This wrapper's job is to load the arguments into the right registers and put the system call number for read into a designated register (on x86-64 Linux, that's %rax). Every system call has a unique numeric ID that the kernel uses to know which service to invoke \u2014 this is the layer that translates a human-readable function name into that number.\nTrap: CPU enters kernelThe wrapper then executes a special instruction (historically int 0x80, now syscall on modern x86-64) that triggers a trap \u2014 a controlled, deliberate switch from user mode to kernel mode. This is the only legitimate doorway between the two; the CPU hardware itself enforces that user code can't just jump into kernel code arbitrarily.\nKernel: Checks and performs I/OOnce in kernel mode, the OS looks up the system call number in its system call table, validates the arguments (e.g., is fd a valid open file descriptor? does the process have permission?), and then executes the actual operation \u2014 in this case, reading bytes from the file into the buffer.\nReturn: Result or errorThe kernel places a return value (bytes read, or a negative error code) back in a register, executes an instruction to return to user mode, and control resumes right after the syscall instruction in the C library wrapper \u2014 which then returns that value back to the application.",
      "media": []
    },
    {
      "slide_num": 43,
      "slide_text": "Example: reading a file\nWhen a program calls:\nread(file_descriptor, buffer, size);\nthe following happens:\n  - The application calls the library wrapper function read().\n  - The wrapper prepares the system-call number and arguments.\n  - The wrapper executes a special CPU instruction, which causes a trap.\n    - The CPU switches from user mode to kernel mode.\n  - The kernel checks the request and permissions.\n    - The OS communicates with the storage driver if necessary.\n  - The kernel performs the operation and returns a result.\n  - The wrapper processes the result and returns it to the application.\n  - The application continues in user mode.",
      "notes_text": "step 6 (\"the wrapper processes the result\")\nmany wrappers translate a negative kernel return value into setting errno and returning -1.\nthis is the natural place if you would first wonder \"wait, how does an error come back?\"",
      "media": []
    },
    {
      "slide_num": 44,
      "slide_text": "1.5 SYSTEM CALLS\n\nAn API is broader and more portable than a system call\n\n32\n\nDimension\n\nAPI\n\nSystem call\n\nLevel\n\nApplication-facing contract\n\nKernel-facing mechanism\n\nPortability\n\nCan span OS implementations\n\nSpecific to OS and architecture\n\nExamples\n\nPOSIX, Windows API, Java API\n\nread, write, mmap, CreateProcess internals\n\nExecution\n\nMay remain entirely in user space\n\nRequires controlled kernel entry\n\nOne API call may invoke zero, one, or multiple system calls.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "An API is the interface programmers use when writing applications.\nA system call is the low-level mechanism used to request a service from the kernel.\nLevel\nThe API is designed for application programmers; the system call is the kernel entry mechanism.\nPortability\nThe same standardized API may be implemented on different systems, while system-call numbers and calling conventions differ across OSs and CPU architectures.\nExamples\nAPIs include POSIX functions, Windows API functions, and Java APIs. System calls include low-level Linux services such as read, write, mmap, and clone.\nExecution\nAn API function may perform everything in user mode or invoke one or more system calls. A system call always requires controlled entry into the kernel.\nPOSIX API: Unix, Linux and macOS; open(), read(), write()\nWindows API: Windows; CreateFile(), ReadFile(), WriteFile()\nJava API: Any system with a Java Virtual Machine; Files.readString()",
      "media": []
    },
    {
      "slide_num": 45,
      "slide_text": "[TABLE]\nTerm | Meaning\nAPI | The programming interface or contract\nWrapper | Library code that implements part of the API and prepares a system call\nSystem call | The actual protected request handled by the kernel\n\nAPI, wrapper, and system call\nThese terms are related but not identical:",
      "notes_text": "read(fd, buffer, 100);\nThe program calls the read() API.\nThe library wrapper prepares the request.\nA system call enters the kernel.\nThe kernel reads the file and returns the data.",
      "media": []
    },
    {
      "slide_num": 46,
      "slide_text": "1.5 SYSTEM CALLS\n\nMode switch \u2260 process context switch\n\n33\n\nMODE SWITCH\n\nPrivilege changes\nUser mode \u2194 kernel mode\nThe same process may continue running.\n\nCONTEXT SWITCH\n\nRunning process changes\nProcess A \u2192 Process B\nCPU state is saved and restored.\n\nA system call always requires controlled kernel entry; it does not necessarily make the scheduler choose another process.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Mode switch\nA mode switch changes the CPU\u2019s privilege level:\nUser mode \u2192 Kernel mode \u2192 User mode\n      - It commonly happens when:\n      - A program makes a system call\n      - An interrupt occurs\n      - An exception occurs\n      - The same process can continue running after the kernel completes its work.\nContext switch\nA context switch changes which process or thread is using the CPU:",
      "media": []
    },
    {
      "slide_num": 47,
      "slide_text": "1.5 SYSTEM CALLS\n\nExample: what really happens when a program calls read()\n\n34\n\n1\n\nApplication calls read(fd, buffer, n)\n\n2\n\nLibrary wrapper arranges arguments\n\n3\n\nTrap transfers control to kernel mode\n\n4\n\nKernel validates fd, buffer, and permissions\n\n5\n\nData is returned now\u2014or process blocks for I/O\n\n6\n\nFunction returns bytes read or an error code\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 48,
      "slide_text": "[TABLE]\nReturn value | Meaning\nPositive number | Number of bytes actually read\n0 | End of file\n-1 | An error occurred\n\nThe six steps\nApplication calls read(fd, buffer, n)\n  - fd: file descriptor identifying the open file\n  - buffer: memory location where data should be placed\n  - n: maximum number of bytes requested\nLibrary wrapper prepares the request\nThe C library\u2019s read() wrapper places the system-call number and arguments into the CPU registers expected by the OS.\nTrap transfers control to the kernel\nThe wrapper executes a special CPU instruction, such as syscall. The CPU switches from user mode to kernel mode.\nKernel validates the request\nThe kernel checks:\n  - Is fd valid?\n  - Is the file open for reading?\n  - Is the buffer a valid writable memory region?\n  - Does the process have permission?\nThe kernel obtains the data\nThere are two possibilities:\n  - If the data is available, the kernel copies it into the program\u2019s buffer.\n  - If the data is not available, the process may block. The scheduler can run another process while the I/O completes.\nWhen the device finishes, it sends an interrupt. The blocked process eventually becomes ready to run again.\nread() returns\nThe kernel returns control to the wrapper, which returns a value to the application:",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 49,
      "slide_text": "SECTION 1.6\n\nOperating-System Architecture\n\nDifferent ways to organize kernel services\u2014and the trade-offs each creates\n\n1.6 / 7\n\n35\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 50,
      "slide_text": "[TABLE]\nArchitecture | Core idea / simple meaning | Primary trade-off | Examples\nMonolithic | Most OS services run together in kernel space | Fast communication, but a large trusted codebase; one kernel bug may affect the entire system | Traditional Unix; Linux\nLayered | The OS is organized into levels; each layer uses lower-layer services | Clear and maintainable structure, but rigid boundaries may reduce efficiency and flexibility | THE operating system; layered concepts in modern OSs\nMicrokernel | Only essential functions remain in the kernel; many services run in user space | Better fault isolation, but message passing and protection-boundary crossings add overhead | MINIX 3; QNX\nModular | Kernel components can be loaded and removed when needed | Flexible with kernel-level performance, but faulty modules can still crash the system | Linux kernel modules\nHybrid | Combines monolithic performance with selected microkernel concepts | Practical balance, but greater architectural complexity and still a large amount of kernel-space code | Windows NT; macOS XNU\n\nKernel architectures move services across protection boundaries",
      "notes_text": "Now move from \"system calls as the mechanism\"  to \"kernel architecture as the design decision\u201d\nThis slide compares the main ways an operating-system kernel can be organized. The key question is:\nWhich OS services run inside the privileged kernel, and which run outside it?\nA protection boundary separates kernel space from user space. Moving services outside the kernel can improve isolation, but communication becomes more expensive.\nMicrokernel\nMINIX 3:   Education and reliability research\nQNX:   Commercial embedded and real-time systems",
      "media": []
    },
    {
      "slide_num": 51,
      "slide_text": "1.6 ARCHITECTURE\n\nMonolithic kernels favor direct, high-performance interaction\n\n37\n\nKERNEL SPACE\n\nProcess mgmt\n\nMemory\n\nFile systems\n\nNetworking\n\nDrivers\n\nSecurity\n\nDirect procedure calls among kernel subsystems\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "In a monolithic kernel, most major operating-system services run together in kernel space",
      "media": []
    },
    {
      "slide_num": 52,
      "slide_text": "How a monolithic kernel is organized\n\"Direct procedure calls among kernel subsystems.\u201d\nBecause everything lives in the same address space, when the file system needs to talk to the disk driver, it doesn't need IPC, message passing, or a mode switch \u2014 it just calls a function directly, the same way any two functions in an ordinary program call each other. This is the mechanical reason monolithic kernels are fast: subsystem-to-subsystem communication is as cheap as a normal function call.\nWhy is it high performance?\n  - All services are inside kernel space, so communication usually requires:\n  - No user-to-kernel mode switch between kernel components\n  - No separate process context switch\n  - Less message-passing overhead\n  - Direct access to shared kernel data\nMain disadvantage\n  - All components have kernel privileges and share the same kernel address space. Therefore:\n  - A faulty driver can corrupt kernel memory.\n  - A bug in the file system can crash the whole OS.\n  - A security vulnerability can gain extensive system control.\n  - The trusted code base is relatively large.",
      "notes_text": "Inter-Process Communication (IPC) is a set of mechanisms in an operating system that allows separate processes to communicate, exchange data, and synchronize their actions",
      "media": []
    },
    {
      "slide_num": 53,
      "slide_text": "1.6 ARCHITECTURE\n\nMicrokernels minimize privileged code and isolate services\n\n38\n\nFile server\n\nNetwork server\n\nDevice server\n\nApplication\n\nMICROKERNEL\n\nScheduling \u2022 IPC \u2022 basic memory management\n\nClient\u2013server messages cross protection boundaries\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Inter-Process Communication (IPC) is a set of mechanisms in an operating system that allows separate processes to communicate, exchange data, and synchronize their actions\nSimple example\nSuppose an application wants to read a file:\nApplication \u2192 message \u2192 Microkernel \u2192 message \u2192 File server\nThe file server handles the request and sends the result back through the microkernel.\nUnlike a monolithic kernel, the application and file system cannot communicate through a direct kernel function call. They use IPC messages.\nA microkernel keeps privileged kernel code small. Scheduling, basic memory management, and IPC remain inside the kernel, while services such as file systems, networking, and device management run as separate user-space servers. These servers communicate using messages. This improves security and fault isolation, but message passing across protection boundaries creates additional overhead",
      "media": []
    },
    {
      "slide_num": 54,
      "slide_text": "1.6 ARCHITECTURE\n\nModules and hybrid designs combine practical strengths\n\n39\n\nModular kernel\n\n\u2022 Small core plus loadable modules\n\u2022 Drivers and file systems can be added dynamically\n\u2022 Modules still execute in kernel space\n\u2022 Example: Linux kernel modules\n\nHybrid system\n\n\u2022 Uses multiple architectural ideas\n\u2022 Performance-critical services remain privileged\n\u2022 Other components may be isolated\n\u2022 Examples: Windows and macOS/XNU\n\nMach influenced microkernel and hybrid designs, including macOS\u2019s XNU architecture.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 55,
      "slide_text": "Modular kernel\nA modular kernel is still fundamentally a monolithic kernel, but parts can be added or removed while the system is running.\n  - Examples of modules:\n    - Device drivers\n    - File-system support\n    - Network protocols\n    - Security extensions\n  - Linux can load a driver only when the corresponding device is connected.\nThe benefit is flexibility:\n  - the kernel does not need every possible driver permanently built into it.\n  - However, modules still run in kernel space. A faulty module can corrupt kernel memory or crash the entire system.\nModular means dynamically extendable\u2014not isolated.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 56,
      "slide_text": "Hybrid kernel\nA hybrid kernel combines architectural ideas from monolithic kernels and microkernels.\nIt may:\n  - Use modular components\n  - Use message-passing mechanisms\n  - Keep performance-critical services in kernel space\n  - Place selected services or subsystems in user space\n  - Organize components with microkernel-inspired interfaces\nWindows NT and macOS XNU are commonly classified as hybrid kernels.\nHybrid means combining architectural approaches to balance performance, flexibility, and isolation.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 57,
      "slide_text": "1.6 ARCHITECTURE\n\nArchitecture is a multidimensional engineering decision\n\n40\n\nGoal\n\nDesign pressure\n\nTypical consequence\n\nPerformance\n\nFewer crossings and copies\n\nMore services in kernel space\n\nReliability\n\nContain failures\n\nSmaller privileged core\n\nSecurity\n\nReduce trusted computing base\n\nMore isolation and validation\n\nMaintainability\n\nClear interfaces and replaceable parts\n\nLayers or modules\n\nCompatibility\n\nPreserve APIs and drivers\n\nHybrid compromises\n\nNo architecture wins every dimension; workload and ecosystem matter.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Goal: What the operating-system designers want to improve.\nDesign pressure: What the design needs to prioritize.\nTypical consequence: How that priority influences the architecture.\nPerformance\nTo improve performance, designers try to reduce:\nMode and protection-boundary crossings\nContext switches\nMessage passing\nData copying\nThis often encourages placing more services in kernel space, where components can communicate directly.\nTrade-off: faster interaction but a larger privileged codebase.\nReliability\nReliable systems need to prevent one failing component from damaging other components.\nThis encourages:\nA smaller privileged kernel\nSeparate address spaces\nIsolated user-space services\nRestartable services\nMicrokernels such as QNX prioritize this approach.\nTrade-off: better fault containment but additional communication overhead.\nSecurity\nSecurity improves when less code receives kernel privileges. This reduces the trusted computing base\u2014the code that must work correctly to keep the system secure.\nThis encourages:\nSmall privileged components\nStrong isolation\nPermission validation\nControlled interfaces\nTrade-off: stronger protection can add checks, complexity, and overhead.\nMaintainability\nA maintainable OS needs components that can be understood, replaced, or updated without redesigning the entire system.\nThis encourages:\nLayers\nModules\nClear interfaces\nSeparation of responsibilities\nLinux kernel modules are one example.\nTrade-off: abstraction boundaries can sometimes reduce performance or introduce design complexity.\nCompatibility\nOperating systems often must preserve:\nExisting APIs\nOlder applications\nDevice drivers\nFile formats\nEnterprise tools\nThis can prevent designers from creating a completely new and \u201cclean\u201d architecture. Hybrid systems frequently contain practical compromises to maintain compatibility.\nWindows NT is a strong example because modern Windows must support a massive hardware and software ecosystem.",
      "media": []
    },
    {
      "slide_num": 58,
      "slide_text": "Performance \u2014 Fewer crossings and copies \u2192 More services in kernel spaceThis is the monolithic argument restated as a design goal rather than a description. If your priority is speed, you minimize the number of mode switches, IPC messages, and data copies between components \u2014 which pushes you toward keeping things in one privileged space (direct calls, as in your monolithic diagram).\nReliability \u2014 Contain failures \u2192 Smaller privileged coreThis is the microkernel argument. If a driver crashing shouldn't take down the whole OS, you want as little code as possible running with full privilege \u2014 so a bug in an isolated component just kills that component, not everything.\nSecurity \u2014 Reduce trusted computing base \u2192 More isolation and validationRelated to reliability but a distinct goal: the \"trusted computing base\" (TCB) is all the code that, if compromised, compromises the whole system. Smaller TCB = fewer places an attacker can gain full privilege. This is why security-critical systems (e.g., seL4, used in some safety-critical/defense contexts) lean hard into microkernel design even at a performance cost.\nMaintainability \u2014 Clear interfaces and replaceable parts \u2192 Layers or modulesThis connects your Layered and Modular rows from the earlier table \u2014 both exist to make the codebase easier to reason about and update, independent of runtime performance or fault isolation.\nCompatibility \u2014 Preserve APIs and drivers \u2192 maybe Hybrid compromisesThis is the pragmatic, business-driven goal: you often can't redesign an OS from scratch \u2014 you have decades of existing drivers and applications that must keep working. Hybrid designs exist largely because of this constraint, not because hybrid is theoretically \"the best\" architecture on paper.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 59,
      "slide_text": "SECTION 1.7\n\nSystem Boot and Initialization\n\nHow a powered-off machine becomes a running operating system\n\n1.7 / 7\n\n41\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 60,
      "slide_text": "1.7 BOOT\n\nBoot is a chain of increasingly capable software\n\n42\n\nFirmware\n\nBIOS / UEFI\n\nBootloader\n\nSelect + load kernel\n\nKernel\n\nInitialize core subsystems\n\nUser space\n\nStart services\n\nLogin / UI\n\nAccept work\n\nEach stage prepares the environment for the next stage.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "The boot process\u2014what happens between pressing the power button and seeing the login screen.\nThe computer begins with very small, limited software. Each stage loads a larger and more capable stage.\nFirmware\u2014BIOS/UEFI____located on the Flash memory on the motherboard____Starts the computer and finds something bootable\nBootloader and OS____located on the SSD, HDD, USB drive, or network server____Loads and runs the operating system\nFirmware \u2014 BIOS/UEFIRuns first, checks and initializes basic hardware, then locates a bootable device.\nBootloaderA small program\u2014such as GRUB\u2014that finds the operating-system kernel, loads it into RAM, and transfers control to it.\nKernelInitializes core OS components such as memory management, process scheduling, device drivers, and hardware interfaces.\nUser spaceThe kernel starts the first user-space process, which launches background services and system processes.\nLogin/UIThe login screen, command-line interface, or desktop appears. The system is now ready to accept user work.\nThe usual sequence is:\nFirmware (BIOS/UEFI) finds a bootable storage device and launches its bootloader.\nBootloader finds the operating-system kernel on that storage device\u2014usually an SSD, HDD, or USB drive.\nThe bootloader loads the kernel from storage into RAM.\nIt transfers CPU control to the kernel.\nFor example, on Linux:\nUEFI firmware starts GRUB from the EFI System Partition.\nGRUB finds the Linux kernel file, such as /boot/vmlinuz.\nGRUB loads the kernel into RAM and starts it.",
      "media": []
    },
    {
      "slide_num": 61,
      "slide_text": "1.7 BOOT\n\nBIOS and UEFI begin hardware initialization\n\n43\n\nBIOS\n\n\u2022 Legacy firmware interface\n\u2022 Power-on self-test\n\u2022 Searches boot devices\n\u2022 Loads initial boot code\n\nUEFI\n\n\u2022 Modern firmware standard\n\u2022 Understands boot entries and filesystems\n\u2022 Supports Secure Boot\n\u2022 Provides richer pre-OS services\n\nFirmware is not the operating system; it locates and launches the next stage.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "UEFI stands for Unified Extensible Firmware Interface\nBIOS stands for Basic Input/Output System\nBoth run before the operating system and prepare the computer to boot.\n\u201cBIOS and UEFI are motherboard firmware, not operating systems. Both initialize hardware and launch the next boot stage. Legacy BIOS usually reads small boot code from the MBR, while UEFI can load an EFI application from the EFI System Partition. UEFI also supports modern features such as GPT disks, Secure Boot, richer drivers, and configurable boot entries.",
      "media": []
    },
    {
      "slide_num": 62,
      "slide_text": "1.7 BOOT\n\nThe bootloader places the kernel in memory and transfers control\n\n44\n\nSelect\n\nChoose OS / kernel\n\nLoad\n\nCopy kernel + initramfs\n\nConfigure\n\nPass boot parameters\n\nJump\n\nTransfer execution\n\nExamples include GRUB, Windows Boot Manager, and Apple\u2019s boot components.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "what the bootloader does after BIOS or UEFI finishes its initial work.\n1. Select\nThe bootloader determines which operating system and kernel to start.\n2. Load\nThe kernel is initially stored on the SSD or another boot device. It cannot execute directly from normal storage, so the bootloader copies it into RAM.\n3. Configure\nThe bootloader gives the kernel information needed during startup, including:\nKernel command-line parameters\nLocation of the root file system\n4. Jump\n\u201cJump\u201d means that the bootloader sets the CPU\u2019s instruction pointer to the kernel\u2019s entry address.",
      "media": []
    },
    {
      "slide_num": 63,
      "slide_text": "Why does the bootloader copy the kernel into RAM?\nthe CPU needs the kernel\u2019s executable instructions and working data in memory so it can begin executing and initialize the operating system.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 64,
      "slide_text": "1.7 BOOT\n\nThe kernel initializes hardware before starting user space\n\n45\n\n1\n\nMemory\n\nDiscover and configure memory management\n\n2\n\nCPU\n\nInitialize cores, timers, and scheduler\n\n3\n\nDevices\n\nEnumerate hardware and load drivers\n\n4\n\nStorage\n\nMount the root filesystem\n\n5\n\nUser space\n\nLaunch the initial process\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "what the kernel does immediately after the bootloader gives it control. The kernel must prepare the computer before normal applications can run.\nThe kernel then prepares the operating system:\nMemory: Detects available RAM and initializes virtual-memory management.\nCPU: Activates processor cores and initializes timers and the CPU scheduler.\nDevices: Detects hardware and loads the appropriate device drivers.\nStorage: Detects storage devices and mounts the root file system.\nUser space: Starts the first user-space process\u2014typically systemd on modern Linux\u2014which launches services and the login interface.\nThe root file system is the main file system that contains the operating system\u2019s essential files and directories.\nIn Linux and Unix, it is mounted at:\n/\nThe / symbol is called the root directory. All other files, directories, disks, and file systems appear underneath it.",
      "media": []
    },
    {
      "slide_num": 65,
      "slide_text": "1.7 BOOT\n\nThe initial user-space process starts the service ecosystem\n\n46\n\nTraditional init\n\n\u2022 Runs as PID 1\n\u2022 Runs startup scripts\n\u2022 Launches background daemons\n\u2022 Manages run levels\n\nsystemd\n\n\u2022 Common on modern Linux distributions\n\u2022 Manages units and dependencies\n\u2022 Starts services in parallel\n\u2022 Handles logging, sessions, and targets\n\nIf PID 1 exits, the system cannot continue normal operation.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares the traditional Linux/Unix init system with the modern systemd init system.\nThe kernel starts PID 1, and PID 1 starts and manages almost everything else in user space. Traditional systems use init; most modern Linux systems use systemd.\nPID means process identifier.\nPID stands for Process Identifier.\nIt is a unique number assigned by the operating system to each running process. The OS uses PIDs to identify, manage, and control processes.\nPID -> Process\n1 ->  systemd or another init process\n850 ->  Web browser\n1024 -> Text editor\n1260 -> Terminal\nAfter the kernel finishes initialization, it starts the first user-space process. This process receives PID 1 and becomes responsible for starting and supervising the rest of user space.\n__Traditional init:\nRuns as PID 1\nExecutes startup scripts in a mostly sequential order\nStarts background services called daemons\nUses runlevels to represent operating modes, such as single-user or multi-user mode\n__Systemd:\nAlso runs as PID 1\nIs the init system used by most modern Linux distributions\nManages services and other resources as units\nUnderstands dependencies between units\nCan start independent services in parallel\nUses targets instead of traditional runlevels\nAlso manages logging, sessions, timers, mounts, and other system components\nDaemons: During boot, the init system\u2014such as systemd\u2014starts the required daemons. They then remain in the background, waiting for an event or request.\nFor example:\nsshd waits for a remote-login request.\nA printing daemon waits for a print job.\nA web-server daemon waits for an HTTP request.\nA scheduling daemon waits until a scheduled time.",
      "media": []
    },
    {
      "slide_num": 66,
      "slide_text": "SYNTHESIS\n\nChapter 1 connects one central control loop\n\n47\n\nApplications\n\nrequest services\n\nProtected entry\n\ninterrupt / trap\n\nKernel policy\n\nvalidate + allocate\n\nHardware\n\nperform work\n\nReturn\n\nresume execution\n\nThe OS is both an abstraction layer and an enforcement mechanism.\n\nNext: processes, threads, and the resources they compete to use\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Applications request services, the kernel safely controls access to resources, hardware performs work when necessary, and execution eventually returns to an application.",
      "media": []
    }
  ],
  "ch2": [
    {
      "slide_num": 1,
      "slide_text": "Operating Systems\nCSC4320, CSC6320\nFALL 2026\nDr. Roya Hosseini\n\nChapter 2: Processes, Threads, Resources, and CPU Scheduling\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 2,
      "slide_text": "\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCopyright and Use Notice\n\nThese slides were prepared by Dr. Roya Hosseini for\n\nCSC4320, CSC6320: Operating Systems at Georgia State University.\n\nThese materials are provided for instructional use only.\n\nUnauthorized copying, posting, sharing, selling, or redistribution of these materials is not permitted\n\nwithout written permission from the instructor.\n\n\u00a9 Dr. Roya Hosseini, Georgia State University, Fall 2026\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 3,
      "slide_text": "Chapter 2: Processes, Threads, Resources, and CPU Scheduling\n  - 2.1 Process Concept\n  - 2.2 Process States and the PCB\n  - 2.3 Process Operations\n  - 2.4 Interprocess Communication\n  - 2.5 Thread Fundamentals\n  - 2.6 Multithreading Models and APIs\n  - 2.7 Context Switching\n  - 2.8 CPU-Scheduling Foundations\n  - 2.9 Scheduling Criteria\n  - 2.10 Scheduling Algorithms\n  - 2.11 Advanced Scheduling\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 4,
      "slide_text": "CHAPTER MAP\n\nBy the end of this chapter, you can trace execution from process creation to CPU selection\n\n04\n\n01\n\nExecution units\n\nProcesses, PCBs, resources, and threads\n\n02\n\nCoordination\n\nCreation, IPC, lifecycle, and context switching\n\n03\n\nScheduling\n\nBursts, criteria, dispatcher, and core algorithms\n\n04\n\nScale + deadlines\n\nMulticore placement and real-time policies\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 5,
      "slide_text": "SECTION 2.1\n\nProcess Concept\n\nA program becomes a process when the operating system gives it an execution context\n\n2.1 / 11\n\n05\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 6,
      "slide_text": "2.1 PROCESS CONCEPT\n\nA program is passive; a process is executing\n\n06\n\nPROGRAM\n\nExecutable instructions stored on disk\nNo current CPU state\nCan be launched many times\n\nPROCESS\n\nA running instance of a program\nHas a PID, address space, and CPU state\nOwns or references resources\n\nOne program can produce many independent processes.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "PID stands for Process Identifier.\nIt is a unique number assigned by the operating system to each running process. The OS uses PIDs to identify, manage, and control processes.\nPID -> Process\n1 ->  systemd or another init process\n850 ->  Web browser\n1024 -> Text editor     => kill 1024\n1260 -> Terminal\nA daemon is a program that runs in the background and provides a system or network service, usually without direct user interaction.",
      "media": []
    },
    {
      "slide_num": 7,
      "slide_text": "2.1 PROCESS CONCEPT\n\nA process address space has regions with different roles\n\n07\n\nSTACK  \u2193\n\nfunction calls, parameters, local variables\n\nHEAP  \u2191\n\ndynamic allocation; grows toward free space\n\nDATA\n\nglobal and static variables\n\nTEXT\n\nexecutable machine instructions\n\nHigher virtual addresses near the stack\nLower virtual addresses near the text segment\n\u2022 Stack grows downward\n\u2022 Heap grows upward\n\u2022 Free space separates them\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nFree virtual-address space",
      "notes_text": "Which regions are shared by threads in one process?  Expected: text, data, and heap are shared; each thread has its own stack\nText segment: Contains the program\u2019s executable machine instructions. It is normally read-only and may be shared by multiple processes running the same program.\nData segment: Contains global and static variables.\n  - Initialized variables are stored in the data section.\n  - Uninitialized or zero-initialized variables are generally stored in the BSS section.\nHeap: Stores dynamically allocated memory requested through functions such as malloc(), calloc(), or new. It traditionally grows toward higher addresses.\nStack: Stores function-call frames, parameters, return addresses, and local variables. It traditionally grows toward lower addresses.\nFree space: The unused virtual-address range between the heap and stack allows both regions to expand.",
      "media": []
    },
    {
      "slide_num": 8,
      "slide_text": "",
      "notes_text": "malloc(sizeof(int))   => requests that amount of memory from the heap.\nmalloc()   => returns the address of the allocated memory.",
      "media": [
        "ch2_slide8_image1.png"
      ]
    },
    {
      "slide_num": 9,
      "slide_text": "2.1 PROCESS CONCEPT\n\nA process is more than the instructions it executes\n\n08\n\nCPU STATE\n\nPC, registers, flags\n\nMEMORY\n\ncode, data, heap, stack\n\nFILES\n\nopen file descriptors\n\nIDENTITY\n\nPID, user, group\n\nCOMMUNICATION + ACCOUNTING\n\npipes, signals, sockets; time, limits, usage\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "A process consists of executable code, its current execution state, its memory, its identity, and the resources assigned to it by the operating system.\nPID: Unique process identifier\nUser ID: Identifies the user who owns the process\nGroup ID: Identifies the process owner\u2019s group\nCode/text: Executable instructions\nData: Global and static variables\nHeap: Dynamically allocated memory\nStack: Function calls, parameters, return addresses, and local variables\nThe OS maintains the process\u2019s open file descriptors. A file descriptor is a small integer representing an open file or another input/output resource.\nCommon examples:\n0 \u2014 standard input\n1 \u2014 standard output\n2 \u2014 standard error",
      "media": []
    },
    {
      "slide_num": 10,
      "slide_text": "2.1 PROCESS CONCEPT\n\nPIDs and parent\u2013child links organize running work\n\n09\n\nPROCESS IDENTIFIER\n\n\u2022 Unique number within a running system\n\u2022 Used by tools and system calls\n\u2022 May be reused after termination\n\nPARENT\u2013CHILD RELATIONSHIP\n\n\u2022 A creator process becomes the parent\n\u2022 Children may inherit selected resources\n\u2022 The OS records ancestry in a process tree\n\nIdentity tells the kernel which execution context an operation targets.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Process identifier\nA PID is a number used to identify a process while it is running.\nEvery active process has a PID.\nTools and system calls use the PID to select a process.\nAfter a process terminates and its information is removed, its PID may eventually be assigned to another process.\nFor example:\nkill 2450\nThis sends a signal to the process currently identified by PID 2450.\nA PID is therefore unique among currently active processes, but it is not permanently associated with one program.\nParent\u2013child relationship\nWhen one process creates another process:\nThe creator is the parent process.\nThe newly created process is the child process.\nThe child receives its own PID.\nThe OS stores the parent\u2019s PID as the child\u2019s PPID\u2014Parent Process Identifier.\nFor example:\nTerminal: PID 1200\n\u2514\u2500\u2500 Program: PID 1250, PPID 1200\nThe terminal process created the program, so the terminal is its parent.",
      "media": []
    },
    {
      "slide_num": 11,
      "slide_text": "SECTION 2.2\n\nProcess States and the PCB\n\nState describes what a process can do now; the PCB preserves everything needed to continue later\n\n2.2 / 11\n\n10\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 12,
      "slide_text": "2.2 STATES + PCB\n\nOne diagram connects process states to the events that move them\n\n11\n\nNEW\n\nbeing created\n\nREADY\n\nwaiting for CPU\n\nRUNNING\n\nexecuting now\n\nWAITING\n\nblocked for event\n\nTERMINATED\n\nexecution finished\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nadmit\n\ndispatch\n\nexit\n\nblock\n\nwake\n\npreempt",
      "notes_text": "Trace each arrow aloud.   =>waiting returns to ready\u2014not directly to running\u2014because the scheduler must select the process again.",
      "media": []
    },
    {
      "slide_num": 13,
      "slide_text": "",
      "notes_text": "https://www.geeksforgeeks.org/operating-systems/states-of-a-process-in-operating-systems/\nThe main process states are:\nNew: The process is in the creation phase. The program exists in secondary memory, and the OS prepares its PCB before loading it into main memory.\nReady: The process has been loaded into main memory and is prepared to run. It is waiting in the ready queue until the CPU becomes available.\nRunning: The CPU is currently executing the instructions of the process. Only one process can be in this state at a time on a single-processor system.\nBlocked/Waiting: The process cannot continue because it is waiting for an event such as I/O completion, user input, or access to a locked resource. Once the event is complete, it moves back to the ready state.\nTerminated: The process has completed its execution or has been stopped. The OS deletes its PCB and frees all resources allocated to it.\nSuspend Ready: A ready process that has been swapped out of main memory and placed in secondary storage due to memory shortage. When brought back to main memory, it returns to the ready state.\nSuspend Block: A blocked process that has been swapped out of main memory and placed in secondary storage due to memory shortage. Before brought back to main memory, first returns to the suspend ready, then it returns to the ready state.",
      "media": [
        "ch2_slide13_image2.png"
      ]
    },
    {
      "slide_num": 14,
      "slide_text": "2.2 STATES + PCB\n\nSuspension removes a process from immediate competition\n\n12\n\nREADY SUSPENDED\n\nAble to run logically\nNot resident in main memory\nMust be restored before dispatch\n\nBLOCKED SUSPENDED\n\nStill waiting for an event\nAlso not resident in main memory\nEvent completion may change its state\n\nSuspension supports swapping, memory pressure control, and administrative pause.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains suspended process states. A suspended process is temporarily removed from normal CPU-scheduling competition. In the classical OS model, it may also be moved out of RAM to secondary storage.\nReady Suspended\nThe process has everything it needs to execute, except that it is suspended.\nIt is logically ready to use the CPU.\nIts memory image may have been moved from RAM to storage.\nIt cannot be selected by the short-term CPU scheduler yet.\nIt must be resumed\u2014and, if swapped out, restored to RAM\u2014before entering the regular Ready state.\nReady Suspended \u2192 restore/resume \u2192 Ready \u2192 dispatch \u2192 Running\nBlocked Suspended\nThe process is suspended and waiting for an event, such as I/O completion.\nIt cannot run because the required event has not occurred.\nIt may also be outside main memory.\nIf the event completes while it remains suspended, it becomes Ready Suspended, not immediately Ready.",
      "media": []
    },
    {
      "slide_num": 15,
      "slide_text": "Simple example\nSuppose Process A is waiting for a disk operation:\n  - Process A is Blocked.\n  - The OS experiences memory pressure and swaps A out \u2192 Blocked Suspended.\n  - The disk operation finishes \u2192 Ready Suspended.\n  - The OS restores A to memory \u2192 Ready.\n  - The scheduler eventually dispatches it \u2192 Running.",
      "notes_text": "One clarification for teaching: \u201csuspended\u201d does not always mean the process is physically outside RAM in every modern OS. A process may also be suspended by an administrator or debugger while some pages remain resident. The slide represents the traditional textbook model that connects suspension with swapping.",
      "media": []
    },
    {
      "slide_num": 16,
      "slide_text": "2.2 STATES + PCB\n\nThe PCB is the kernel\u2019s record for one process\n\n13\n\nIDENTITY\n\nPID and ownership\n\nCPU CONTEXT\n\nPC and registers\n\nSTATE\n\nready, running, waiting\n\nSCHEDULING\n\npriority and queue links\n\nMEMORY + ACCOUNTING\n\npage-table information; CPU time and limits\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "The PCB\u2014Process Control Block\u2014is the kernel\u2019s data record for one process.\nA process has its program and memory, but the kernel needs its own protected record to manage that process. The PCB is stored in kernel memory, where the user process cannot directly modify it.",
      "media": []
    },
    {
      "slide_num": 17,
      "slide_text": "2.2 STATES + PCB\n\nRegisters and the program counter make execution resumable\n\n14\n\nPROGRAM COUNTER\n\n\u2022 Address of the next instruction\n\u2022 Changes as instructions execute\n\u2022 Saved when the process stops running\n\nCPU REGISTERS\n\n\u2022 General-purpose values\n\u2022 Stack pointer and status flags\n\u2022 Restored before execution resumes\n\nWithout saved CPU state, a preempted process could not continue correctly.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Program counter\nThe Program Counter (PC) is a special CPU register that identifies where execution should continue.\nIt normally contains the address of the next instruction.\nIt changes as instructions execute.\nA jump, loop, function call, or return can change it to a different address.\nWhen a process stops running, the kernel saves its PC value.\nCPU registers\nRegisters contain the process\u2019s current working values, including:\nNumbers being calculated\nMemory addresses\nFunction arguments and return values\nStack pointer\nStatus flags\nDuring a context switch\nWhen Process A stops running:\nCPU registers \u2192 saved in Process A\u2019s PCB\nProgram counter \u2192 saved in Process A\u2019s PCB\nBefore Process A resumes:\nProcess A\u2019s PCB \u2192 restore registers\nProcess A\u2019s PCB \u2192 restore program counter\nCPU continues Process A",
      "media": []
    },
    {
      "slide_num": 18,
      "slide_text": "Explain:\nThe program counter is the timestamp, while the other registers preserve the unfinished details of what the process was doing at that moment.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 19,
      "slide_text": "2.2 STATES + PCB\n\nProcess queues reflect what each process is waiting for\n\n15\n\nQueue\n\nContains\n\nLeaves when\n\nJob\n\nnewly submitted work\n\nadmitted\n\nReady\n\nrunnable processes\n\ndispatched\n\nDevice\n\nprocesses blocked for I/O\n\nI/O completes\n\nEvent\n\nprocesses awaiting a condition\n\nevent occurs\n\nA process can move among queues many times during its lifetime.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 20,
      "slide_text": "SECTION 2.3\n\nProcess Operations\n\nCreation builds a new execution context; termination releases it in a controlled way\n\n2.3 / 11\n\n16\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 21,
      "slide_text": "2.3 OPERATIONS\n\nProcess creation establishes identity, state, and inheritance\n\n17\n\nCreate\n\nallocate PID + PCB\n\nInitialize\n\naddress space + state\n\nInherit\n\nfiles + attributes\n\nEnqueue\n\nplace child in ready queue\n\nThe exact inheritance rules depend on the operating system and creation API.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Create: Assigns a unique PID and creates a Process Control Block (PCB).\nInitialize: Sets up the process\u2019s address space, initial state, and CPU context.\nInherit: Gives the child selected resources from its parent, such as open files, permissions, and environment settings.\nEnqueue: Places the new process in the ready queue, where it waits for CPU time.\nThe exact inherited resources depend on the operating system and the process-creation method, such as Unix fork() or Windows CreateProcess().",
      "media": []
    },
    {
      "slide_num": 22,
      "slide_text": "2.3 OPERATIONS\n\nfork() copies a process; exec() replaces its program\n\n18\n\nfork()\n\nCreates a child process\nChild begins from the same logical point\nReturns different values to parent and child\n\nexec()\n\nLoads a new program into the caller\nReplaces code, data, heap, and stack\nPID usually remains unchanged\n\nA common Unix pattern is fork() \u2192 child exec().\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 23,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide23_image3.png"
      ]
    },
    {
      "slide_num": 24,
      "slide_text": "Solution",
      "notes_text": "",
      "media": [
        "ch2_slide24_image4.png"
      ]
    },
    {
      "slide_num": 25,
      "slide_text": "EXERCISE\n\nConsider a single-CPU system with the following rules:\n  - The Ready List (RL) contains three priority queues: priority 0, 1, and 2, where 2 is the highest priority.\n  - Initially, only Process 0 (PCB 0) exists. It has priority 2 and is running.\n  - create(n) creates a child process with priority n.\n  - New processes receive the next available PCB number: 1, 2, 3, and so forth.\n  - A newly created process is placed at the end of its corresponding priority queue.\n  - Creating a process does not interrupt the currently running process.\n  - timeout() moves the running process from the head to the end of its current priority queue. The process now at the head of the highest-priority nonempty queue begins running.\nThe following operations are executed by whichever process is running at that moment:\n  - create(1)\n  - create(2)\n  - timeout()\n  - create(0)\n  - timeout()\n  - create(2)\nQuestion:\nAt the end of this sequence, how many direct child processes does each process have? Show which process executes each create() operation.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 26,
      "slide_text": "Solution\n\n[TABLE]\nOperation | Running process | Result\ncreate(1) | P0 | P0 creates P1\ncreate(2) | P0 | P0 creates P2\ntimeout() | P0 \u2192 P2 | P2 begins running\ncreate(0) | P2 | P2 creates P3\ntimeout() | P2 \u2192 P0 | P0 begins running\ncreate(2) | P0 | P0 creates P4\n\nFinal result:\nP0: 3 children \u2014 P1, P2, and P4\nP2: 1 child \u2014 P3\nP1, P3, and P4: 0 children",
      "notes_text": "2.5.2: Effect of operations on processes and resources.",
      "media": []
    },
    {
      "slide_num": 27,
      "slide_text": "2.3 PROCESS OPERATIONS\n\nC example: fork creates a child that can call exec\n\n19\n\nSETUP + FORK\n\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <sys/types.h>\n#include <sys/wait.h>\nint main(void) {\npid_t pid = fork();\n\nCHECK THE RETURN VALUE\n\nif (pid < 0) {\nperror(\"fork\");\nreturn EXIT_FAILURE;\n}\nif (pid == 0) {\nprintf(\"Child PID=%ld\\n\",\n(long)getpid());\n\nPart 1 of 2 \u2022 After fork(), parent and child continue from the next statement.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide shows the first part of creating a process in Unix/Linux using fork().\nCompile the complete two-slide example with: gcc fork_exec_wait.c -o demo.\n[Sources]\n- https://man7.org/linux/man-pages/man2/fork.2.html\n[/Sources]\npid < 0 means that fork() failed to create a child process.\npid == 0 does not mean the child\u2019s actual PID is zero. Its actual PID might be 101; zero only tells the program, \u201cYou are executing inside the child process.\u201d\npid > 0: This code is executing in the parent; pid contains the child\u2019s PID. pid > 0 does not mean the parent\u2019s PID is positive. It means:\n\u201cYou are in the parent process, and this positive value identifies the child that was just created.\u201d\ngetpid() // Current process\u2019s own PID\ngetppid() // Current process\u2019s parent PID",
      "media": []
    },
    {
      "slide_num": 28,
      "slide_text": "2.3 PROCESS OPERATIONS\n\nC example: exec replaces the child; waitpid collects its status\n\n20\n\nCHILD: EXEC\n\nchar *args[] = {\"ls\", \"-l\", NULL};\nexecvp(args[0], args);\n/* Reached only if exec fails */\nperror(\"execvp\");\n_exit(127);\n}\n\nPARENT: WAIT\n\nint status;\nif (waitpid(pid, &status, 0) == -1) {\nperror(\"waitpid\");\nreturn EXIT_FAILURE;\n}\nif (WIFEXITED(status))\nprintf(\"Exit status=%d\\n\",\nWEXITSTATUS(status));\nreturn EXIT_SUCCESS;\n}\n\nPart 2 of 2 \u2022 Test WIFEXITED before using WEXITSTATUS.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This is the parent\u2019s code. It waits for the child to finish and then checks how the child ended.\nAsk: Why use _exit() after exec failure in the child? It avoids flushing copied stdio buffers inherited from the parent.\n[Sources]\n- https://man7.org/linux/man-pages/man3/exec.3.html\n- https://man7.org/linux/man-pages/man2/waitpid.2.html\n[/Sources]\nThe sequence is:\nThe child calls execvp() to run ls -l.\nIf successful, execvp() never returns.\nIf it fails, perror() displays the error.\n_exit(127) immediately terminates the child.\nThe parent\u2019s waitpid() receives the status and can obtain 127 using WEXITSTATUS(status).\n127 is conventionally used to indicate that a requested command could not be executed or was not found.\nexecvp() replaces the child\u2019s current program code and memory image with the ls program. It does not create another process, and the child keeps the same PID.\nIf execvp() succeeds, it never returns. Therefore, these lines run only if it fails:\nperror(\"execvp\"); _exit(127);\nif (waitpid(pid, &status, 0) == -1)\nmeans: \u201cWait for the child whose PID is stored in pid, and place information about its termination in status.\u201d\nif (WIFEXITED(status))\nchecks whether the child terminated normally, such as by calling exit() or _exit() or by returning from main().\nIf it ended normally: WEXITSTATUS(status)\nextracts the child\u2019s actual exit code.",
      "media": []
    },
    {
      "slide_num": 29,
      "slide_text": "2.3 PROCESS OPERATIONS\n\nThe same code creates two execution paths, then synchronizes them\n\n21\n\nfork()\n\nreturns twice\n\nChild: pid = 0\n\nexecvp(\"ls\", \u2026)\n\nParent: pid > 0\n\nwaitpid(pid, \u2026)\n\nRejoin\n\nparent collects status\n\nexec succeeds \u2192 it never returns\nexec fails \u2192 child reports the error and exits\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Rejoin: Parent resumes \u2014 collects child\u2019s termination status\nThis slide summarizes the complete fork()\u2013exec()\u2013waitpid() sequence:\nfork() creates the child.Afterward, the parent and child are separate processes that continue from the next statement.\nChild path: pid == 0The child calls execvp() and replaces its original program image with ls.\nParent path: pid > 0The parent calls waitpid() and waits for that specific child to terminate.\nChild terminates.The operating system records its termination information.\nwaitpid() returns.The parent collects the child\u2019s status and continues.",
      "media": []
    },
    {
      "slide_num": 30,
      "slide_text": "2.3 OPERATIONS\n\nA shell uses fork(), exec(), exit(), and wait() as one workflow\n\n22\n\n1\u20132\n\nShell reads a command \u2192 Shell calls fork()\n\n3\n\nChild calls exec()\n\n4\n\nProgram runs\n\n5\u20136\n\nChild calls exit() \u2192 Parent wait() collects status\n\nA context is preserved before another execution stream takes over.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains what happens when a user enters a command into a Unix/Linux shell.",
      "media": []
    },
    {
      "slide_num": 31,
      "slide_text": "=>\nThe workflow is:\nShell reads the command.\nShell calls fork(), creating a child process.\nTwo paths now exist:\n  - The child calls exec() to replace its program image with ls.\n  - The parent shell calls wait() and pauses.\nThe child executes ls -l.\nWhen ls finishes, the child terminates and provides an exit status.\nwait() returns, the shell collects the status, and displays the next command prompt.\n\nShell\n\u2502\n\u251c\u2500\u2500 Child \u2192 exec(ls) \u2192 run ls \u2192 terminate\n\u2502\n\u2514\u2500\u2500 Parent shell \u2192 wait() \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2192 resume",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 32,
      "slide_text": "2.3 OPERATIONS\n\nexit() ends execution; wait() completes parent-side cleanup\n\n23\n\nexit()\n\nTerminates the calling process\nRecords an exit status\nReleases most resources\n\nwait()\n\nBlocks or polls for child termination\nRetrieves the exit status\nAllows the kernel to remove the child record\n\nTermination is a protocol between child, kernel, and parent.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains how a child process terminates and how its parent collects the result.\nexit(): executed by the terminating process\nwait(): executed by the parent",
      "media": []
    },
    {
      "slide_num": 33,
      "slide_text": "2.3 OPERATIONS\n\nZombie and orphan describe different parent\u2013child conditions\n\n24\n\nZOMBIE\n\nChild has terminated\nExit status has not been collected\nKeeps a small process-table entry\n\nORPHAN\n\nParent terminates before the child\nChild may continue running\nThe kernel reparents it to init, systemd, or another designated subreaper.\n\nA zombie is dead but uncollected; an orphan may still be alive.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares two different parent\u2013child situations.\nZombie process\nA zombie is a child process that has already terminated, but its parent has not yet collected its termination status using wait() or waitpid().\nIt is no longer executing.\nMost of its resources have been released.\nThe kernel keeps a small process-table record containing its PID and termination status.\nIt disappears when the parent collects its status.\nZombie: the child is dead, but the parent is alive and has not collected its status.Orphan: the parent is dead, but the child is still alive.",
      "media": []
    },
    {
      "slide_num": 34,
      "slide_text": "2.3 OPERATIONS\n\nA process tree exposes ancestry and workload structure\n\n25\n\nSystem root\n\nstarts core services\n\nService\n\ncreates workers\n\nShell\n\nlaunches user commands\n\nWorker\n\nmay create helpers\n\nTree structure helps with signaling, accounting, cleanup, and administration.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide means that processes form parent\u2013child relationships. When one process creates another, the creator becomes the parent, and the new process becomes its child.\nFor example:\nSystem root: PID 1\u2014usually systemd\u2014starts system services.\nService: A server process may create worker processes.\nShell: Creates child processes to execute user commands.\nWorker: May create additional helper processes.\nWorker process\nA worker performs the main tasks assigned by a parent process or service.\nHelper process\nA helper performs a smaller, specialized supporting task for another process.\nA worker might create a helper to",
      "media": []
    },
    {
      "slide_num": 35,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide35_image5.png"
      ]
    },
    {
      "slide_num": 36,
      "slide_text": "SECTION 2.4\n\nInterprocess Communication\n\nCooperating processes exchange data or coordinate actions through kernel-supported mechanisms\n\n2.4 / 11\n\n26\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 37,
      "slide_text": "IPC - Interprocess Communication\nSeparate processes normally have separate protected address spaces. One process cannot directly access another process\u2019s variables or memory.\nTherefore, the operating system must provide a controlled method for them to:\n  - Exchange data\n  - Send notifications\n  - Coordinate when operations occur\n  - Synchronize access to shared resources",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 38,
      "slide_text": "2.4 IPC\n\nIndependent and cooperating processes differ in intent\n\n27\n\nINDEPENDENT\n\nCannot affect another process\u2019s computation\nNo planned information exchange\nStrong isolation by default\n\nCOOPERATING\n\nShares data or synchronization\nMay improve modularity and performance\nRequires an IPC protocol\n\nCooperation creates value\u2014but also synchronization and security risks.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares processes based on whether they intentionally interact.\nCooperating processes\nCooperating processes communicate or coordinate to accomplish related work.\nFor example:\nWeb browser process \u21c4 Network process\nThey may use:\nPipes , Shared memory , Message queues , Sockets , Signals\nA cooperating process requires IPC\u2014Interprocess Communication because separate processes normally have separate protected address spaces. One process cannot directly access another process\u2019s variables or memory.\nIndependent and cooperating processes differ in how they interact",
      "media": []
    },
    {
      "slide_num": 39,
      "slide_text": "2.4 IPC\n\nShared memory favors speed; message passing favors isolation\n\n28\n\nSHARED MEMORY\n\nProcesses map a common region\nVery fast after setup\nRequires explicit synchronization\n\nMESSAGE PASSING\n\nProcesses send and receive messages\nKernel mediates communication\nNatural across protection boundaries\n\nChoose based on data volume, trust, topology, and failure isolation.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares the two main IPC models. Interprocess Communication\nShared memory\nThe operating system creates a memory region and maps it into the virtual address spaces of multiple processes.\nBoth processes can directly read and write that region. After setup, communication is fast because they do not need to ask the kernel to transfer every piece of data.\nThe risk is that both processes might access the same data simultaneously. Therefore, they need synchronization mechanisms such as:\nMutexes\nSemaphores\nCondition variables\nWithout synchronization, race conditions or corrupted data can occur.\nMessage passing\nProcesses communicate by explicitly sending and receiving messages:\nProcess A \u2500\u2500send\u2500\u2500\u25ba Kernel/IPC channel \u2500\u2500receive\u2500\u2500\u25ba Process B\nExamples include pipes, message queues, and sockets.\nThe kernel controls the communication, so processes keep separate address spaces. This provides better isolation and is easier to use across protection boundaries or different computers, but it may be slower because of system calls, data copying, and context switches.\nShared memory is usually faster but harder to coordinate; message passing is usually safer and simpler but may have more overhead.",
      "media": []
    },
    {
      "slide_num": 40,
      "slide_text": "2.4 IPC\n\nIPC mechanisms offer different scope and semantics\n\n29\n\nMechanism\n\nBest fit\n\nKey property\n\nPipe\n\nrelated local processes\n\nbyte stream\n\nNamed pipe\n\nunrelated local processes\n\nfilesystem name\n\nSignal\n\nevent notification\n\nsmall asynchronous notice\n\nSocket\n\nlocal or network peers\n\nbidirectional endpoint\n\nNo single IPC mechanism is best for every communication pattern.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares four IPC mechanisms and when each is most suitable.\nPipe\nA regular or anonymous pipe usually connects related processes, such as a parent and child.\nNamed pipe\nA named pipe\u2014also called a FIFO\u2014has a pathname in the filesystem.\nSignal\nA signal sends a small asynchronous notification to a process.\nSocket\nA socket is a communication endpoint that can connect:\nProcesses on the same computer using Unix-domain sockets\nProcesses on different computers using network sockets",
      "media": []
    },
    {
      "slide_num": 41,
      "slide_text": "2.4 IPC\n\nAn unnamed pipe connects a writer to a reader\n\n30\n\nCreate\n\nkernel allocates pipe\n\nFork\n\ndescriptors are inherited\n\nWrite\n\nproducer sends bytes\n\nRead\n\nconsumer receives bytes\n\nA pipe is a byte stream: message boundaries are not automatically preserved.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains how an unnamed pipe allows two related processes\u2014usually a parent and child\u2014to communicate.\nCreate: The kernel creates a pipe with two file descriptors:\nfd[0]: read end\nfd[1]: write end\nFork: The child inherits copies of both pipe descriptors from the parent.\nClose unused ends\nWrite\nThe producer sends bytes into the pipe:\nRead\nThe consumer retrieves bytes",
      "media": []
    },
    {
      "slide_num": 42,
      "slide_text": "2.4 IPC\n\nSignals notify a process that an event occurred\n\n31\n\nCOMMON USES\n\n\u2022 Interrupt or terminate\n\u2022 Report an exception\n\u2022 Notify a child-state change\n\u2022 Deliver a timer event\n\nIMPORTANT LIMITS\n\n\u2022 Carries little information\n\u2022 Handler runs asynchronously\n\u2022 Unsafe handler actions can corrupt state\n\u2022 Delivery rules vary by signal\n\nSignals are notifications, not a general-purpose data channel.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains signals, which are short notifications sent to a process when an event occurs. A signal tells the process what type of event happened, but it generally does not carry substantial data.\nSignals are suitable for notifying a process that something happened, but pipes, shared memory, or sockets should be used to transfer substantial data.",
      "media": []
    },
    {
      "slide_num": 43,
      "slide_text": "2.4 IPC\n\nLocal and network IPC face different failures\n\n32\n\nLOCAL IPC\n\nSame machine\nLower latency\nShared kernel and administrative domain\n\nNETWORK IPC\n\nDifferent machines possible\nPackets may be delayed or lost\nPeers can fail independently\n\nSockets provide a common endpoint abstraction across both scopes.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares communication between processes on the same computer with communication across a network.\nsocket provides the same basic communication interface whether two processes are on the same computer or on different computers.",
      "media": []
    },
    {
      "slide_num": 44,
      "slide_text": "SECTION 2.5\n\nThread Fundamentals\n\nThreads divide execution within a process while sharing its address space and resources\n\n2.5 / 11\n\n33\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 45,
      "slide_text": "2.5 THREADS\n\nA process owns resources; a thread is a stream of execution\n\n34\n\nPROCESS\n\nOwn virtual address space\nOwn resource container\nStrong protection boundary\n\nTHREAD\n\nOwn PC, registers, and stack\nShares code, data, heap, and open files\nScheduled for execution\n\nEvery process starts with at least one thread.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 46,
      "slide_text": "2.5 THREADS\n\nMultithreading improves responsiveness and resource use\n\n35\n\nRESPONSIVENESS\n\nprogress despite blocking\n\nRESOURCE SHARING\n\ncommon address space\n\nECONOMY\n\ncheaper than processes\n\nSCALABILITY\n\nuse multiple cores\n\nSTRUCTURE\n\nseparate concurrent activities\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 47,
      "slide_text": "2.5 THREADS\n\nEach thread has private execution state and shared process state\n\n36\n\nPRIVATE PC\n\nnext instruction\n\nPRIVATE REGISTERS\n\ncurrent computation\n\nPRIVATE STACK\n\ncalls + locals\n\nSHARED CODE\n\nprogram instructions\n\nSHARED DATA + SHARED FILES\n\nglobals + heap; process descriptors\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 48,
      "slide_text": "2.5 THREADS\n\nUser-level and kernel-level threads shift control and cost\n\n37\n\nUSER-LEVEL\n\nManaged by a runtime library\nFast creation and switching\nKernel may not see each thread\n\nKERNEL-LEVEL\n\nManaged and scheduled by kernel\nCan run independently on cores\nOperations cost more\n\nThe mapping model determines how user threads use kernel scheduling entities.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares who manages the threads.\nUser-level threads\nA thread library inside the application manages them.\nThe library creates, schedules, and switches between threads.\nThese operations are fast because they may not require entering the kernel.\nThe kernel may see only one process or one kernel thread, not every user thread.\nIn a many-to-one model, one blocking system call can block all user threads.\nMultiple user threads cannot run simultaneously on different CPU cores in that model.\nKernel-level threads\nThe operating-system kernel manages each thread.\nThe kernel schedules each thread separately.\nDifferent threads from the same process can run simultaneously on different CPU cores.\nIf one thread blocks, another thread can continue running.\nCreating and switching threads costs more because kernel involvement is required.",
      "media": []
    },
    {
      "slide_num": 49,
      "slide_text": "User-Level Threads: Threads are managed in user space and execute one at a time.\nKernel-Level Threads: Threads are managed by the kernel and can run in parallel on multiple CPUs.",
      "notes_text": "The kernel can see kernel-level threads, but it may not see individual user-level threads.\nhttps://www.geeksforgeeks.org/operating-systems/difference-between-user-level-thread-and-kernel-level-thread/",
      "media": [
        "ch2_slide49_image6.png"
      ]
    },
    {
      "slide_num": 50,
      "slide_text": "2.5 THREADS\n\nA thread moves through states much like a process\n\n38\n\nA Thread Control Block stores the thread\u2019s state, PC, registers, stack, and scheduling data.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide shows that each thread has its own execution state, similar to a process:\nNew: The thread has been created.\nReady: It can run but is waiting for CPU time.\nRunning: It is currently executing on a CPU core.\nWaiting/Blocked: It is waiting for something, such as I/O, a lock, or another thread.\nTerminated: It has completed execution.\nThe Thread Control Block (TCB) stores the information needed to pause and resume the thread, including its program counter, registers, stack information, state, and scheduling data.",
      "media": [
        "ch2_slide50_image7.png"
      ]
    },
    {
      "slide_num": 51,
      "slide_text": "Exercise  \u2013 True / False\nMark True or False and justify.\nThreads within a process share the same stack.\nKernel-level threads can run in parallel on multicore CPUs.\nA virtual CPU is a physical hardware component.",
      "notes_text": "Answers:\nFalse\nTrue\nFalse",
      "media": []
    },
    {
      "slide_num": 52,
      "slide_text": "Exercise  \u2013 Scenario-Based\nA multithreaded application freezes completely when one thread performs a blocking disk read.\nQuestion:\nIs the application using user-level threads or kernel-level threads? Why?",
      "notes_text": "User-level threads, because a blocking system call blocks the entire process.",
      "media": []
    },
    {
      "slide_num": 53,
      "slide_text": "A server accepts and processes requests from clients. The server keeps the results of the most recent requests in memory as a cache.\n  - A new request arrives on average every 25 ms.\n  - The processing of each request takes 15 ms.\n  - If the requested result is not in the memory cache, additional 75 ms are needed to access the disk.\n  - On average, 80% of all requests can be serviced without disk access.\n  - The creation of a new thread takes 10 ms.\nShould the server be implemented as a single-threaded or a multi-threaded process? Justify your answer.\n\nEXERCISE",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 54,
      "slide_text": "80% of all requests take 15 ms. The remaining 20% take 15 + 75 = 90 ms.\nA single-threaded process blocks when the disk is accessed. Thus the average time for each request is 0.8 * 15 + 0.2 * 90 = 30.\nThe process is unable to keep up with the arrivals and thus an unbounded queue will formA multithreaded process incurs the thread creation time for each request but does not block on disk access. Thus, the average CPU time for each request is 10 + 15 = 25, which is sufficient to keep up with the arrivals.\nThe multi-threaded approach is the better choice.\n\nSolution",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 55,
      "slide_text": "SECTION 2.6\n\nMultithreading Models and APIs\n\nThread mappings determine concurrency, parallelism, and blocking behavior\n\n2.6 / 11\n\n39\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "API stands for Application Programming Interface.\nAn API is a defined way for one program to request a service from another program or system.\nFor example, a program may use an operating-system API to:\nCreate a process\nOpen or read a file\nAllocate memory\nCreate a thread\nCommunicate through a network",
      "media": []
    },
    {
      "slide_num": 56,
      "slide_text": "2.6 MODELS + APIs\n\nThree mapping models trade simplicity for parallelism\n\n40\n\nModel\n\nMapping\n\nConsequence\n\nMany-to-one\n\nmany user \u2192 one kernel\n\nno multicore parallelism\n\nOne-to-one\n\none user \u2192 one kernel\n\nparallel but higher overhead\n\nMany-to-many\n\nmany user \u2192 many kernel\n\nflexible, more complex\n\nTwo-level\n\nM:M with bound threads\n\nselective control\n\nModern general-purpose systems commonly expose one-to-one kernel threads.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 57,
      "slide_text": "Thread-mapping model:\n  - Many-to-one: Many user threads \u2192 one kernel thread\n  - One-to-one: Each user thread \u2192 one kernel thread\n  - Many-to-many: Many user threads \u2192 a set of kernel threads\nMany-to-one: Many user threads share one kernel thread. It is fast but provides no multicore parallelism. One blocking system call may block all threads.\nOne-to-one: Each user thread maps to its own kernel thread. Threads can run on different cores, but kernel management adds overhead.\nMany-to-many: Many user threads share a pool of several kernel threads. It supports parallelism with fewer kernel threads, but scheduling is more complex.\nTwo-level model: A variation of many-to-many. Most user threads can move among kernel threads, but selected user threads can be permanently bound to particular kernel threads.",
      "notes_text": "Many-to-one: If A requests unavailable data from a disk, K becomes blocked. Because B and C also need K to run, they cannot execute either.\nOne-to-one: If A requests unavailable data, only K1 becomes blocked. The kernel can still schedule K2 and K3, so B and C may continue running.\nMany-to-many: Many user threads share a pool of kernel threads. Each running user thread uses only one kernel thread at a time, but it may use a different kernel thread later. For example, a web server might handle 50,000 client tasks using only 16 kernel threads:\n50,000 lightweight user tasks\n\u2193\nRuntime scheduler\n\u2193\n16 kernel threads\n\u2193\nCPU cores",
      "media": []
    },
    {
      "slide_num": 58,
      "slide_text": "",
      "notes_text": "Many-to-one: Many user threads \u2192 one kernel thread\nOne-to-one: Each user thread \u2192 one kernel thread\nMany-to-many: Many user threads \u2192 a set of kernel threads\nTwo-level model: A variation of many-to-many. Most user threads can move among kernel threads, but selected user threads can be permanently bound to particular kernel threads.",
      "media": [
        "ch2_slide58_image8.png",
        "ch2_slide58_image11.png",
        "ch2_slide58_image10.png",
        "ch2_slide58_image9.png"
      ]
    },
    {
      "slide_num": 59,
      "slide_text": "2.6 MODELS + APIs\n\nThread APIs Support Direct Threads and Managed Thread Pools\n\n41\n\nPTHREAD_CREATE\n\nstart POSIX thread\n\nPTHREAD_JOIN\n\nwait for POSIX thread\n\nJAVA THREAD\n\nThread object with a Runnable task\n\nJAVA EXECUTOR\n\nExecutorService manages a thread pool\n\nPYTHON THREADING + ThreadPoolExecutor\n\nThread object; pool interface\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares threading interfaces in different programming environments\nPOSIX Threads in C\npthread_create() creates and starts a new thread.\npthread_join() makes the calling thread wait until another thread finishes.\nJava\nThread represents a thread.\nRunnable defines the task that the thread executes.\nExecutorService manages a pool of worker threads and assigns submitted tasks to them.\nPython\nthreading.Thread creates a thread object.\nThreadPoolExecutor manages a pool and accepts submitted tasks.",
      "media": []
    },
    {
      "slide_num": 60,
      "slide_text": "2.6 LINUX CONTEXT\n\nLinux represents processes and threads with a common task abstraction\n\n42\n\nTASK MODEL\n\n\u2022 Schedulable entities are represented by task structures\n\u2022 A thread group shares selected resources\n\u2022 Each task has its own execution context\n\nclone() / clone3()\n\n\u2022 Flags choose what the child shares\n\u2022 CLONE_VM: address space\n\u2022 CLONE_FILES: descriptor table\n\u2022 CLONE_THREAD: thread group\n\nProcesses and threads differ mainly in which resources their tasks share.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains that Linux internally treats both processes and threads as \u201ctasks.\u201d\nThe difference is mainly which resources tasks share.\nSeparate processes usually have separate address spaces and file-descriptor tables.\nThreads in the same process share memory and other resources, while retaining their own CPU state and stack.\nThe clone() or clone3() system call creates a new task. Flags determine what the new task shares with its creator:\nCLONE_VM: shares the same virtual address space.\nCLONE_FILES: shares the file-descriptor table.\nCLONE_THREAD: places the new task in the same thread group.\nFor example:\nFew or no sharing flags \u2192 the new task behaves more like a separate process.\nThread-related sharing flags \u2192 the new task behaves like a thread in the same process.\nThe key point is:\nLinux does not implement processes and threads as completely different objects. Both are tasks; their resource-sharing configuration determines how they behave.",
      "media": []
    },
    {
      "slide_num": 61,
      "slide_text": "2.6 POSIX THREADS\n\nPthreads example: define a worker and pass one argument\n\n43\n\nHEADERS + WORKER\n\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <pthread.h>\nvoid *worker_thread(void *arg) {\nint id = *(int *)arg;\n\nWORKER BODY\n\nprintf(\"Worker %d; pthread=%lu\\n\",\nid,\n(unsigned long)pthread_self());\nreturn NULL;\n}\n\nPart 1 of 2 \u2022 pthread_self() identifies the pthread; it is not necessarily the kernel TID.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide defines the function that a new POSIX thread will execute:\nPOSIX:  Portable Operating System Interface.\nvoid *arg allows the thread function to receive a pointer to any type of data.\nint id = *(int *)arg; converts arg to an int *, dereferences it, and copies the integer value into id.\nprintf() displays the worker number and its pthread identifier.\npthread_self() returns the calling thread\u2019s pthread identifier.\nreturn NULL; terminates the worker thread without returning a result.",
      "media": []
    },
    {
      "slide_num": 62,
      "slide_text": "2.6 POSIX THREADS\n\nPthreads example: create the worker, then join it\n\n44\n\nCREATE\n\nint main(void) {\npthread_t thread;\nint id = 1;\nint rc = pthread_create(\n&thread, NULL, worker_thread, &id);\nif (rc != 0) {\nfprintf(stderr, \"pthread_create: %s\\n\",\nstrerror(rc));\nreturn EXIT_FAILURE;\n}\n\nJOIN\n\nrc = pthread_join(thread, NULL);\nif (rc != 0) {\nfprintf(stderr, \"pthread_join: %s\\n\",\nstrerror(rc));\nreturn EXIT_FAILURE;\n}\nputs(\"Worker completed.\");\nreturn EXIT_SUCCESS;\n}\n\nCompile with: gcc pthread_demo.c -pthread -o pthread_demo\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide shows how the main thread creates a worker thread and waits for it to finish.\npthread_t thread;\nint id = 1;\nthread stores the pthread identifier.\nid is the value passed to the worker.\nint rc = pthread_create( &thread, NULL, worker_thread, &id);\nThe four arguments mean:\n&thread \u2014 location for storing the new thread\u2019s identifier\nNULL \u2014 use default thread attributes\nworker_thread \u2014 function the new thread will execute\n&id \u2014 argument passed to that function\nAfter successful creation, the main and worker threads may run concurrently.\nrc = pthread_join(thread, NULL);\nThis makes the main thread wait until the specified worker terminates.\nthread identifies which worker to wait for.\nNULL means the main thread does not need the worker\u2019s return value.\nIf successful, it returns 0.\nIf it fails, it returns an error number stored in rc.\nOnly after the worker finishes does this execute:\nputs(\"Worker completed.\");\nThe overall sequence is:\nMain creates worker \u2192 both may execute \u2192 main calls pthread_join() and waits \u2192 worker finishes \u2192 main continues\nThe compilation command is correct:\ngcc pthread_demo.c -pthread -o pthread_demo",
      "media": []
    },
    {
      "slide_num": 63,
      "slide_text": "2.6 MODELS + APIs\n\nPython threads: concurrency is not always CPU parallelism\n\n45\n\nI/O-BOUND WORK\n\nThreads overlap waits well\nUseful for files, sockets, and services\nSimple shared-state communication\n\nCPU-BOUND WORK\n\nGlobal Interpreter Lock (GIL) limits parallel bytecode\nMultiprocessing can use multiple cores\nNative libraries may release the lock\n\nChoose the concurrency mechanism from the workload, not the syntax.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains that concurrency and parallelism are not the same.\nConcurrency means multiple tasks make progress during the same period.\nParallelism means multiple tasks execute at exactly the same time, usually on different CPU cores.\nThreads are effective for Concurrency\nProcesses are effective for parallelism\nPython threads are usually effective for I/O-bound work; processes are usually better for CPU-bound Python work.",
      "media": []
    },
    {
      "slide_num": 64,
      "slide_text": "2.6 MODELS + APIs\n\nThread pools bound concurrency and reuse workers\n\n46\n\nWHY POOL THREADS\n\n\u2022 Avoid repeated creation cost\n\u2022 Limit resource consumption\n\u2022 Queue excess tasks\n\u2022 Centralize lifecycle management\n\nDESIGN QUESTIONS\n\n\u2022 Pool size\n\u2022 Queue capacity\n\u2022 Rejection or backpressure policy\n\u2022 Task cancellation and failure\n\nA pool separates task submission from worker-thread management.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "A thread pool is a fixed or controlled group of reusable worker threads.\nInstead of creating a new thread for every task:\nThe program submits tasks to a queue.\nAn available worker thread removes a task.\nThe worker executes it.\nAfter completion, the worker returns to the pool and accepts another task.\nTasks \u2192 Waiting queue \u2192 Worker threads \u2192 Completed tasks\nWhy use a thread pool?\nAvoid repeated creation cost: Creating and destroying threads for every task is expensive.\nLimit resource consumption: The pool prevents the program from creating too many threads.\nQueue excess tasks: Tasks wait when every worker is busy.\nCentralize management: One component controls thread creation, shutdown, cancellation, and errors.",
      "media": []
    },
    {
      "slide_num": 65,
      "slide_text": "2.6 MODELS + APIs\n\nMulticore programming introduces new correctness and performance challenges\n\n47\n\nDECOMPOSITION\n\nfind parallel tasks\n\nBALANCE\n\ndistribute useful work\n\nDEPENDENCIES\n\ncoordinate ordering\n\nDATA\n\npartition and protect state\n\nTESTING\n\nreproduce timing bugs\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nParallel speedup requires enough independent work with limited synchronization overhead.",
      "notes_text": "This slide presents five challenges when writing programs that use multiple CPU cores:\nDecomposition: Divide the program into tasks that can run simultaneously. Some operations cannot be parallelized because they depend on earlier results.\nBalance: Distribute work evenly. If one core receives most of the work, other cores sit idle and provide little benefit.\nDependencies: Preserve the correct execution order. A task must wait when it needs data produced by another task.\nData: Decide what data each task owns or shares. Shared data requires synchronization to prevent race conditions.\nTesting: Multicore bugs depend on timing and thread interleavings. A race condition may appear during one execution and disappear during the next.\nAdding more cores does not automatically make a program faster. The work must be divisible, balanced, correctly synchronized, and carefully tested.",
      "media": []
    },
    {
      "slide_num": 66,
      "slide_text": "ACTIVE LEARNING\n\nConcept check: many-to-one threads on an 8-core CPU\n\n48\n\nQUESTION\n\nIf many user threads map to one kernel thread, how many CPU cores can execute those user threads simultaneously?\n\nDISCUSS\n\n1. Think individually\n2. Compare reasoning with a partner\n3. Defend one answer using OS state and cost\n\nBe ready to explain the mechanism\u2014not only the answer.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Answer: One core. The kernel sees only one schedulable kernel thread, so the user threads cannot run in parallel on multiple cores.",
      "media": []
    },
    {
      "slide_num": 67,
      "slide_text": "SECTION 2.7\n\nContext Switching\n\nA context switch saves one execution context and restores another\n\n2.7 / 11\n\n49\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 68,
      "slide_text": "2.7 CONTEXT SWITCHING\n\nA process context switch follows a controlled save\u2013select\u2013restore sequence\n\n50\n\n1\u20132\n\nInterrupt or trap enters kernel \u2192 Save current CPU state\n\n3\n\nUpdate current PCB\n\n4\n\nScheduler selects next process\n\n5\u20136\n\nRestore selected PCB state \u2192 Resume at saved program counter\n\nA context is preserved before another execution stream takes over.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains how the operating system switches the CPU from one process to another.\nEnter the kernel: An interrupt, system call, exception, or timer event transfers control to the kernel.\nSave the current CPU state: The kernel saves the running process\u2019s program counter, registers, stack pointer, and status flags.\nUpdate its PCB: The saved values and new process state\u2014such as Ready or Waiting\u2014are recorded in the current process\u2019s PCB.\nSelect another process: The scheduler chooses a process from the ready queue.\nRestore its CPU state: The kernel loads the selected process\u2019s saved registers and program counter from its PCB.\nResume execution: The selected process continues from the instruction where it previously stopped.",
      "media": []
    },
    {
      "slide_num": 69,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide69_image12.png"
      ]
    },
    {
      "slide_num": 70,
      "slide_text": "Context switches between processes p and q.",
      "notes_text": "Captions\nProcess p is running. The current state of p is in the CPU, while p's PCB contains an out-of-date copy.\nA hardware interrupt transfers control to the OS, which saves the current CPU state in p's PCB.\nIf the OS chooses process q to continue, the current CPU state is overwritten with q's last state from q's PCB.\nAs q continues running, the saved state in q's PCB gets out of date. q's current state is maintained in the CPU.\nAnother interrupt causes the current CPU state to be saved in q's PCB. The OS then may restart p by restoring p's saved state in the CPU.\nAs p continues running, the saved state in the PCB gets out of date.",
      "media": [
        "ch2_slide70_image13.png"
      ]
    },
    {
      "slide_num": 71,
      "slide_text": "",
      "notes_text": "Captions\nProcess p is running. The current state of p is in the CPU, while p's PCB contains an out-of-date copy.\nA hardware interrupt transfers control to the OS, which saves the current CPU state in p's PCB.\nIf the OS chooses process q to continue, the current CPU state is overwritten with q's last state from q's PCB.\nAs q continues running, the saved state in q's PCB gets out of date. q's current state is maintained in the CPU.\nAnother interrupt causes the current CPU state to be saved in q's PCB. The OS then may restart p by restoring p's saved state in the CPU.\nAs p continues running, the saved state in the PCB gets out of date.",
      "media": [
        "ch2_slide71_image14.png"
      ]
    },
    {
      "slide_num": 72,
      "slide_text": "",
      "notes_text": "Captions\nProcess p is running. The current state of p is in the CPU, while p's PCB contains an out-of-date copy.\nA hardware interrupt transfers control to the OS, which saves the current CPU state in p's PCB.\nIf the OS chooses process q to continue, the current CPU state is overwritten with q's last state from q's PCB.\nAs q continues running, the saved state in q's PCB gets out of date. q's current state is maintained in the CPU.\nAnother interrupt causes the current CPU state to be saved in q's PCB. The OS then may restart p by restoring p's saved state in the CPU.\nAs p continues running, the saved state in the PCB gets out of date.",
      "media": [
        "ch2_slide72_image15.png"
      ]
    },
    {
      "slide_num": 73,
      "slide_text": "",
      "notes_text": "Captions\nProcess p is running. The current state of p is in the CPU, while p's PCB contains an out-of-date copy.\nA hardware interrupt transfers control to the OS, which saves the current CPU state in p's PCB.\nIf the OS chooses process q to continue, the current CPU state is overwritten with q's last state from q's PCB.\nAs q continues running, the saved state in q's PCB gets out of date. q's current state is maintained in the CPU.\nAnother interrupt causes the current CPU state to be saved in q's PCB. The OS then may restart p by restoring p's saved state in the CPU.\nAs p continues running, the saved state in the PCB gets out of date.",
      "media": [
        "ch2_slide73_image16.png"
      ]
    },
    {
      "slide_num": 74,
      "slide_text": "",
      "notes_text": "Captions\nProcess p is running. The current state of p is in the CPU, while p's PCB contains an out-of-date copy.\nA hardware interrupt transfers control to the OS, which saves the current CPU state in p's PCB.\nIf the OS chooses process q to continue, the current CPU state is overwritten with q's last state from q's PCB.\nAs q continues running, the saved state in q's PCB gets out of date. q's current state is maintained in the CPU.\nAnother interrupt causes the current CPU state to be saved in q's PCB. The OS then may restart p by restoring p's saved state in the CPU.\nAs p continues running, the saved state in the PCB gets out of date.",
      "media": [
        "ch2_slide74_image17.png"
      ]
    },
    {
      "slide_num": 75,
      "slide_text": "",
      "notes_text": "Captions\nProcess p is running. The current state of p is in the CPU, while p's PCB contains an out-of-date copy.\nA hardware interrupt transfers control to the OS, which saves the current CPU state in p's PCB.\nIf the OS chooses process q to continue, the current CPU state is overwritten with q's last state from q's PCB.\nAs q continues running, the saved state in q's PCB gets out of date. q's current state is maintained in the CPU.\nAnother interrupt causes the current CPU state to be saved in q's PCB. The OS then may restart p by restoring p's saved state in the CPU.\nAs p continues running, the saved state in the PCB gets out of date.",
      "media": [
        "ch2_slide75_image18.png"
      ]
    },
    {
      "slide_num": 76,
      "slide_text": "Exercise:\n\nA context switch for a currently running process p may be caused by _____.\n1) process p itself\n  - T\n  - F\n2) the OS\n  - T\n  - F\n3) some other process q\n  - T\n  - F",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 77,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide77_image19.png"
      ]
    },
    {
      "slide_num": 78,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide78_image20.png"
      ]
    },
    {
      "slide_num": 79,
      "slide_text": "Answer",
      "notes_text": "",
      "media": [
        "ch2_slide79_image21.png"
      ]
    },
    {
      "slide_num": 80,
      "slide_text": "2.7 CONTEXT SWITCHING\n\nThread switches are usually cheaper within the same process\n\n51\n\nPROCESS SWITCH\n\nChanges address-space context\nMay change page tables and caches\nRestores a different PCB\n\nTHREAD SWITCH\n\nChanges PC, registers, and stack\nShared address space can remain\nRestores a different TCB\n\nActual cost depends on architecture, cache effects, and kernel design.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 81,
      "slide_text": "2.7 CONTEXT SWITCHING\n\nMode switch and context switch answer different questions\n\n52\n\nMODE SWITCH\n\nPrivilege level changes\nUser mode \u2194 kernel mode\nThe same thread may continue\n\nCONTEXT SWITCH\n\nRunning execution entity changes\nOld state saved; new state restored\nMay occur after scheduling\n\nA system call causes a mode switch; it does not always cause a context switch.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 82,
      "slide_text": "2.7 CONTEXT SWITCHING\n\nContext switching is necessary overhead\n\n53\n\nDIRECT COST\n\n\u2022 Save and restore state\n\u2022 Run scheduler and dispatcher\n\u2022 Update memory-management context\n\nINDIRECT COST\n\n\u2022 Cache and TLB disruption\n\u2022 Pipeline disturbance\n\u2022 Reduced locality\n\nMore switches can improve responsiveness while reducing useful CPU work.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Translation lookaside buffer (TLB): \u00a0is a memory cache that stores the recent translations of virtual memory addresses to physical memory addresses. It is used to reduce the time taken to access a user memory location.[1] It can be called an address-translation cache. It is a part of the chip's memory-management unit (MMU).\nTLB) is a specialized, high-speed hardware cache located inside or near the Memory Management Unit (MMU). Its primary role is to store recently used virtual-to-physical address translations, allowing the CPU to bypass slower page table lookups in main memory. This significantly reduces memory access latency and improves overall CPU performance.\nWhy it exists: In a virtual memory system, every memory access requires translating a Virtual Page Number (VPN) to a Physical Frame Number (PFN). Without a TLB, this involves two memory accesses \u2014 one to fetch the page table entry and another to access the actual data \u2014 effectively doubling access time.",
      "media": []
    },
    {
      "slide_num": 83,
      "slide_text": "ACTIVE LEARNING\n\nThink\u2013pair\u2013share: which switch is usually cheaper?\n\n54\n\nQUESTION\n\nProcess A contains T\u2081 and T\u2082. Process B contains T\u2083. Is switching T\u2081 \u2192 T\u2082 usually faster than switching T\u2081 \u2192 T\u2083? Why?\n\nDISCUSS\n\n1. Think individually\n2. Compare reasoning with a partner\n3. Defend one answer using OS state and cost\n\nBe ready to explain the mechanism\u2014not only the answer.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Target: T\u2081 \u2192 T\u2082 is usually cheaper because both threads share Process A\u2019s address space. Avoid saying \u201calways\u201d: architecture, ASIDs/PCIDs, cache state, and kernel implementation affect actual cost.\nSwitching from to is usually cheaper because they share the same process address space.\nSwitching from to also requires changing the memory-management context to Process B\u2019s address space.\n\nTarget: T\u2081 \u2192 T\u2082 is usually cheaper because both threads share Process A\u2019s address space. Avoid saying \u201calways\u201d: architecture, ASIDs/PCIDs, cache state, and kernel implementation affect actual cost.\nSwitching from \ud835\udc47_1to \ud835\udc47_2is usually cheaper because they share the same process address space.\nSwitching from \ud835\udc47_1to \ud835\udc47_3also requires changing the memory-management context to Process B\u2019s address space.",
      "media": []
    },
    {
      "slide_num": 84,
      "slide_text": "SECTION 2.8\n\nCPU-Scheduling Foundations\n\nScheduling chooses who runs next; dispatching performs the handoff\n\n2.8 / 11\n\n55\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 85,
      "slide_text": "2.8 SCHEDULING FOUNDATIONS\n\nProcesses alternate between CPU bursts and I/O waits\n\n56\n\nCPU burst\n\ncompute\n\nI/O request\n\nblock\n\nI/O burst\n\ndevice works\n\nWake up\n\nreturn ready \u2192 Next CPU burst: continue\n\nThe distribution of CPU bursts strongly influences scheduling performance.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide shows that a process alternates between using the CPU and waiting for I/O.\nCPU burst: The process uses the CPU to execute instructions\u2014for example, performing calculations.\nI/O request: The process requests an operation, such as reading data from disk. For a blocking request, it enters the waiting state.\nI/O burst: The device handles the operation. Meanwhile, the CPU can execute another ready process.\nWake up: When I/O completes, the process becomes ready and waits to be scheduled again.",
      "media": []
    },
    {
      "slide_num": 86,
      "slide_text": "2.8 SCHEDULING FOUNDATIONS\n\nCPU-bound and I/O-bound workloads stress different resources\n\n57\n\nCPU-BOUND\n\nLong CPU bursts\nLess frequent I/O waiting\nThroughput depends on compute capacity\n\nI/O-BOUND\n\nShort CPU bursts\nFrequent device or network waits\nResponse depends on quick dispatch\n\nA healthy mix can keep both CPU and devices busy.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide says CPU-bound processes spend most of their time computing, while I/O-bound processes spend much of their time waiting for input/output.\nCPU-bound performance is mainly limited by computation; I/O-bound performance is mainly limited by I/O.\n\u201cThroughput depends on compute capacity\u201d means a faster CPU can help CPU-bound workloads complete more work per second.\n\u201cResponse depends on quick dispatch\u201d means that once an I/O-bound process becomes ready, giving it the CPU promptly lets it perform its short computation and issue its next I/O request. Its overall performance also depends on how quickly the I/O completes.",
      "media": []
    },
    {
      "slide_num": 87,
      "slide_text": "[TABLE]\n | CPU-bound | I/O-bound\nMain activity | Performing computations | Reading, writing, or waiting for data\nCPU bursts | Usually long | Usually short\nI/O waits | Less frequent | Frequent\nExample | Performing a large numerical calculation | Copying files when disk speed is the bottleneck\nMain performance limit | CPU processing capacity | Device or network performance",
      "notes_text": "This slide says CPU-bound processes spend most of their time computing, while I/O-bound processes spend much of their time waiting for input/output.",
      "media": []
    },
    {
      "slide_num": 88,
      "slide_text": "2.8 SCHEDULING FOUNDATIONS\n\nSchedulers operate at different time scales\n\n58\n\nScheduler\n\nDecision\n\nFrequency\n\nLong-term\n\nadmit jobs\n\nlow\n\nMedium-term\n\nsuspend or resume\n\noccasional\n\nShort-term\n\nselect ready process\n\nvery high\n\nDispatcher\n\nperform selected switch\n\nevery dispatch\n\nDispatch latency is the time needed to stop one process and start another running.process and start another.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains the different scheduling roles and how frequently each one operates.\nLong-term scheduler: Decides which new jobs to admit for execution. Controls the number and mix of active processes. Acts infrequently because admitting jobs happens less often than switching CPU use.\nMedium-term scheduler; Temporarily suspends processes and later resumes them, traditionally by swapping them out of and back into memory. Acts occasionally, such as when memory pressure requires it.\nShort-term scheduler; Chooses which process in the ready queue gets the CPU next. Acts very frequently\u2014for example, when a process blocks, terminates, or its time slice expires.\nDispatcher: Gives control of the CPU to the process selected by the short-term scheduler. Acts whenever that selection is put into effect.",
      "media": []
    },
    {
      "slide_num": 89,
      "slide_text": "Preemptive Vs Non-preemptive Scheduling\n\nNon-Preemptive Scheduling\n  - Running process keeps the CPU until:\n    - It terminates, or\n    - It blocks (e.g., I/O request)\n  - No forced interruption by OS\n  - Fewer context switches\n  - Simpler implementation\n  - May cause poor responsiveness\nPreemptive Scheduling\n  - OS can interrupt a running process\n  - CPU may be reassigned when:\n    - A new process enters the ready queue\n    - A blocked process becomes ready\n    - A timer interrupt occurs (time slice expires)\n  - Better responsiveness\n  - Supports multitasking & time-sharing\n  - More context switching overhead",
      "notes_text": "Non-preemptive = process gives up CPU voluntarily.\nPreemptive = OS can take CPU away.",
      "media": []
    },
    {
      "slide_num": 90,
      "slide_text": "",
      "notes_text": "Captions\nProcess p1 arrives at time t1 and starts executing.\nA second process p2 arrives a time t2.\nUnder a non-preemptive algorithm, p1 continues while p2 waits.\np2 starts when p1 terminates at time t3.\nUnder a preemptive algorithm, p1 stops at time t2.\nIf p2 is chosen to run next, p1 needs to wait until time t4 to continue.",
      "media": [
        "ch2_slide90_image22.png"
      ]
    },
    {
      "slide_num": 91,
      "slide_text": "2.8 SCHEDULING FOUNDATIONS\n\nPreemption improves responsiveness but increases coordination cost\n\n59\n\nNON-PREEMPTIVE\n\nProcess keeps CPU until block or exit\nSimpler reasoning\nA long burst can delay others\n\nPREEMPTIVE\n\nKernel can reclaim CPU\nSupports time sharing and priorities\nShared data needs stronger protection\n\nTimer interrupts make practical preemptive scheduling possible.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide says preemption can improve response time, but adds CPU-switching overhead and requires careful protection of shared data.\nNonpreemptive scheduling: A process keeps the CPU until it blocks, exits, or voluntarily yields. A long CPU burst can make other processes wait. Execution is easier to reason about because there are fewer possible switching points.\nPreemptive scheduling: The OS can take the CPU away from a running process. Other processes can get CPU time before the current process finishes its burst. A process may be paused halfway through updating shared data.\nPreemptive: Round Robin and Shortest Remaining Time First.\nNonpreemptive: First-Come, First-Served and nonpreemptive Shortest Job First.",
      "media": []
    },
    {
      "slide_num": 92,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide92_image23.png"
      ]
    },
    {
      "slide_num": 93,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide93_image24.png"
      ]
    },
    {
      "slide_num": 94,
      "slide_text": "Exercise 1 (True/False)\nIn a preemptive priority scheduling system, a lower-priority process can interrupt a higher-priority process.\nAging is used to prevent starvation in priority scheduling.\nIn real-time systems, missing a deadline may be unacceptable.\nA CPU-bound process typically receives higher priority in interactive systems.\nBurst time includes both CPU time and I/O time.",
      "notes_text": "1\ufe0f\u20e3 False\n2\ufe0f\u20e3 True\n3\ufe0f\u20e3 True\n4\ufe0f\u20e3 False\n5\ufe0f\u20e3 False",
      "media": []
    },
    {
      "slide_num": 95,
      "slide_text": "SECTION 2.9\n\nScheduling Criteria\n\nThe best algorithm depends on which performance objective matters most\n\n2.9 / 11\n\n60\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 96,
      "slide_text": "2.9 CRITERIA\n\nScheduling quality is measured from several perspectives\n\n61\n\nUTILIZATION\n\nCPU busy percentage\n\nTHROUGHPUT\n\njobs completed per unit time\n\nTURNAROUND\n\ncompletion \u2212 arrival\n\nWAITING\n\ntime spent ready\n\nRESPONSE + FAIRNESS\n\nfirst run \u2212 arrival; reasonable access for all\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Creating a Process",
      "media": []
    },
    {
      "slide_num": 97,
      "slide_text": "2.9 CRITERIA\n\nScheduling quality is measured from several perspectives\n\n61\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nCriterion | Meaning | Goal\nCPU utilization | Percentage of time the CPU is busy. Busy for 90 out of 100 ms = 90%. | Maximize\nThroughput | Number of processes completed per unit of time. Completing 20 processes in 10 seconds = 2 processes/second. | Maximize\nTurnaround time | Total time from arrival to completion: completion \u2212 arrival. | Minimize\nWaiting time | Total time spent in the ready queue, waiting for the CPU. | Minimize\nResponse time | Time until the process first gets the CPU: first start \u2212 arrival. | Minimize\nFairness | Giving processes reasonable CPU access and preventing indefinite postponement, called starvation. | Maintain",
      "notes_text": "This slide explains how we evaluate scheduling: keeping the CPU busy, completing work, reducing delays, and giving processes fair access.",
      "media": []
    },
    {
      "slide_num": 98,
      "slide_text": "[TABLE]\nMeasurement | Calculation\nResponse time | 2 \u2212 0 = 2 ms\nWaiting time | Initial wait of 2 + later wait of 4 = 6 ms\nTurnaround time | 12 \u2212 0 = 12 ms\n\nFor a simple example, suppose process A:\nArrives at 0 ms.\nWaits, then first runs from 2\u20135 ms.\nGets preempted and waits from 5\u20139 ms.\nRuns again from 9\u201312 ms, then finishes.\nIts measurements are:",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 99,
      "slide_text": "What Is a Gantt Chart?\nA Gantt chart is a timeline diagram used to show:\nWhich process is running on the CPU and for how long.",
      "notes_text": "",
      "media": [
        "ch2_slide99_image25.png"
      ]
    },
    {
      "slide_num": 100,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide100_image26.png"
      ]
    },
    {
      "slide_num": 101,
      "slide_text": "Step-by-Step Execution\n    - Time 0:\tOnly P1 has arrived \u2192 Runs\n    - Time 1:\tP2 arrives (priority 4 > 2)\n    - \u27a1 Preempts P1\n    - P2 runs\n    - Time 2:\tP3 arrives (priority 6 > 4)\n    - \u27a1 Preempts P2\n    - P3 runs\n    - Time 3:\tP4 arrives (priority 3 < 6)\n    - No preemption (P3 still highest)\n    - Time 4:\tP3 finishes\n    - Highest priority in ready queue = P2\n    - P2 resumes\n    - Time 7:\tP2 finishes\n    - Highest priority = P4\n    - P4 runs\n    - Time 8:\tP4 finishes\n    - Only P1 remains\n    - P1 resumes\n    - Time 15:\tP1 finishes",
      "notes_text": "",
      "media": [
        "ch2_slide101_image27.png"
      ]
    },
    {
      "slide_num": 102,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide102_image28.png"
      ]
    },
    {
      "slide_num": 103,
      "slide_text": "Solution Outline\n  - Execution Order:\n  - Time 0 \u2192 P1 runs (only one available)\n  - Time 6 \u2192 P2 (highest priority)\n  - Then P3\n  - Gantt Chart:\n  - Waiting Times:\n  - P1 = 0\n  - P2 = 6 \u2212 1 = 5\n  - P3 = 10 \u2212 2 = 8\n  - Average Waiting Time = (0 + 5 + 8) / 3 = 4.33",
      "notes_text": "",
      "media": [
        "ch2_slide103_image29.png"
      ]
    },
    {
      "slide_num": 104,
      "slide_text": "2.9 CRITERIA\n\nScheduling criteria: which values should we maximize or minimize?\n\n62\n\nCriterion\n\nPrefer\n\nWhy\n\nCPU utilization\n\nhigher\n\navoid idle capacity\n\nThroughput\n\nhigher\n\nfinish more work\n\nTurnaround\n\nlower\n\ncomplete jobs sooner\n\nWaiting / Response\n\nlower / lower\n\nreduce ready-queue delay; react quickly to users\n\nPredictability matters too: low variance can be more valuable than a slightly better average.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide says interactive systems prioritize quick responses, while batch systems prioritize completing jobs efficiently.\nInteractive systems respond to users as they work; batch systems execute submitted jobs with little or no user interaction while those jobs run.\npredictability:: consistent response times can provide a better experience than usually fast responses with occasional long delays. \u201cLow variance\u201d means those response times vary less.",
      "media": []
    },
    {
      "slide_num": 105,
      "slide_text": "SECTION 2.10\n\nScheduling Algorithms\n\nAlgorithm behavior becomes clear when the same workload is drawn as a Gantt chart\n\n2.10 / 11\n\n63\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 106,
      "slide_text": "What Is an Arbitration Rule?\n  - An arbitration rule is used:\n  - When two or more processes have the same priority.\n  - It decides which one runs first.\n  - Examples:\n    - FIFO (First-Come, First-Served)\n    - SJF (Shortest Job First)\n    - Lowest PID\n    - Round Robin\n  - These rules break ties.\n  - They do not change priority values.\n  - Breaks ties between equal priorities",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 107,
      "slide_text": "Scheduling of Batch Processes\n\ud83d\udd39 What Are Batch Processes?\n  - Batch processes are jobs that:\n    - Run without user interaction\n    - Are submitted in advance\n    - Execute sequentially by the operating system\n    - Focus on throughput, not response time\n  - Examples:\n    - Payroll processing\n    - Scientific simulations\n    - Data analysis jobs",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 108,
      "slide_text": "\ud83d\udd39 Goals of Batch Scheduling\n  - The scheduler aims to:\n    - Maximize CPU utilization\n    - Maximize throughput (jobs completed per unit time)\n    - Minimize average waiting time\n    - Minimize turnaround time\n  - (User responsiveness is not a priority.)",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 109,
      "slide_text": "2.10 ALGORITHMS\n\nUse one workload to compare scheduling decisions\n\n64\n\nProcess\n\nArrival\n\nCPU burst\n\nP1\n\n0\n\n8\n\nP2\n\n1\n\n4\n\nP3\n\n2\n\n2\n\nP4\n\n3\n\n1\n\nAssume lower number means higher priority only on the priority example.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "[Sources]\n- Abraham Silberschatz, Peter B. Galvin, and Greg Gagne, Operating System Concepts, 10th ed.\n- Andrew S. Tanenbaum and Herbert Bos, Modern Operating Systems, 4th ed.\n[/Sources]",
      "media": []
    },
    {
      "slide_num": 110,
      "slide_text": "\ud83d\udd39 Common Scheduling Algorithms for Batch Systems\n  - 1\ufe0f\u20e3 First-Come, First-Served (FCFS)\n    - Processes run in arrival order.\n    - Simple but may cause long waiting times.\n    - FIFO is non-preemptive.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 111,
      "slide_text": "Execution Under FIFO Scheduling",
      "notes_text": "Captions\nThree processes need to be scheduled. p1 arrives at t = 0 and will need 6 units of CPU time. p2 arrives at t = 1 and will need 3 units. p3 arrives at t = 3 and will need 2 units.\np1 arrived first and starts immediately at t = 0.\np2 arrived second and will start as soon as p1 terminates at t = 6.\np3 is the last arriving process and will start when p2 terminates at t = 9.",
      "media": [
        "ch2_slide111_image30.png"
      ]
    },
    {
      "slide_num": 112,
      "slide_text": "2.10 ALGORITHMS\n\nFCFS scheduling: question\n\nFirst-Come, First-Served (FCFS) runs ready processes in arrival order.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nProcess | Arrival time | CPU burst\nP1 | 0 | 8\nP2 | 1 | 4\nP3 | 2 | 2\nP4 | 3 | 1\n\nUsing nonpreemptive FCFS:\n\n1. Draw the Gantt chart.\n\n2. Find each process\u2019s waiting,\nturnaround, and response times.\n\n3. Calculate the average of\neach of these three measures.\n\nAssume one CPU, one CPU burst per process, no I/O, and no context-switch overhead.\n\nFCFS is nonpreemptive: a later arrival does not interrupt the running process.\n\nAll times are in time units.",
      "notes_text": "Ask students to schedule P1 (arrival 0, burst 8), P2 (arrival 1, burst 4), P3 (arrival 2, burst 2), and P4 (arrival 3, burst 1). FCFS is nonpreemptive. There is a single CPU and each process has one CPU burst; ignore context-switch overhead. Waiting time is total time in the ready queue, turnaround is completion minus arrival, and response is first start minus arrival.",
      "media": []
    },
    {
      "slide_num": 113,
      "slide_text": "2.10 ALGORITHMS\n\nFCFS scheduling: answer\n\nThe CPU runs P1 \u2192 P2 \u2192 P3 \u2192 P4; each process finishes before the next starts.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nP1\n\nP2\n\nP3\n\nP4\n\n0\n\n8\n\n12\n\n14\n\n15\n\nGantt chart \u2022 not to scale\n\n[TABLE]\nProcess | Completion | Waiting | Turnaround | Response\nP1 | 8 | 0 | 8 | 0\nP2 | 12 | 7 | 11 | 7\nP3 | 14 | 10 | 12 | 10\nP4 | 15 | 11 | 12 | 11\nAverage | \u2014 | 7 | 10.75 | 7\n\nWaiting = start \u2212 arrival     \u2022     Turnaround = completion \u2212 arrival     \u2022     Response = first start \u2212 arrival\n\nP1 keeps the CPU until time 8, even though P2, P3, and P4 arrive earlier.",
      "notes_text": "P1 starts at time 0 and completes at time 8. P2, P3, and P4 arrive at 1, 2, and 3, and wait in that order. P2 runs from 8 to 12, P3 from 12 to 14, and P4 from 14 to 15. Waiting times are 0, 7, 10, and 11 (average 7). Turnaround times are 8, 11, 12, and 12 (average 10.75). Response times are 0, 7, 10, and 11 (average 7). Waiting equals response for this single-burst, nonpreemptive example. All times are in time units. The displayed Gantt segments are equal-width for readability and explicitly marked not to scale.",
      "media": []
    },
    {
      "slide_num": 114,
      "slide_text": "2\ufe0f\u20e3 Shortest Job First (SJF)\n  - Process with smallest CPU burst runs first.\n  - Minimizes average waiting time.\n  - Requires burst-time estimation.\n  - SJF is non-preemptive.",
      "notes_text": "A more appropriate name for SJF would be \"Shortest Total CPU Time First\". For historical reasons, the term \"Job\" has remained in common use.",
      "media": []
    },
    {
      "slide_num": 115,
      "slide_text": "Execution under SJF scheduling",
      "notes_text": "Captions ^\n\ufeff\ufeff\ufeffThree processes need to be scheduled. p1 arrives at t = 0 and will need 6 units of CPU time. p2 arrives at t = 1 and will need 3units. p3 arrives at t = 3 and will need 2 units.\n\ufeff\ufeff\ufeff51 arrived first and starts immediately at t = 0.\n\ufeff\ufeff\ufeffp3 has a shorter total CPU time requirement than p2 and will start as soon as p1 terminates at t = 6.\n\ufeff\ufeff\ufeffp2 starts when p3 terminates at t = 8.",
      "media": [
        "ch2_slide115_image31.png"
      ]
    },
    {
      "slide_num": 116,
      "slide_text": "3\ufe0f\u20e3 Shortest Remaining Time First (SRTF)\n  - Preemptive version of SJF.\n  - Always runs job with least remaining time.\n  - SRT is the preemptive version of SJF.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 117,
      "slide_text": "Execution under SRTF scheduling",
      "notes_text": "Captions\nThree processes need to be scheduled. p1 arrives at t = 0 and will need 6 units of CPU time. p2 arrives at t = 1 and will need 3 units. p3 arrives at t = 3 and will need 2 units.\np1 arrives first and starts immediately at t = 0.\np2 arrives at t = 1. p2's remaining time is 3 units while p1's remaining time is 5 units. Thus p2 preempts p1 and starts at t = 1.\np3 arrives at t = 3. p3's remaining time is 2 units while p2's remaining time is only 1 unit. Thus p2 continues running until t = 4.\nAt t = 4, p1's remaining time is 5 units and p3's remaining time is 2 units. Thus p3 starts and runs until t = 6.\nFinally, p1 restarts at t = 6 and terminates at t = 11.",
      "media": [
        "ch2_slide117_image32.png"
      ]
    },
    {
      "slide_num": 118,
      "slide_text": "What Is Aging?\n  - Aging is a technique used in priority scheduling to prevent starvation.\n  - Aging gradually increases the priority of a process the longer it waits in the ready queue.\n  - It modifies the priority over time to prevent starvation.\n  - Why Do We Need Aging?\n  - In priority scheduling:\n      - High-priority processes run first.\n      - Low-priority processes may never get CPU time.\n      - This leads to starvation.\n    - Aging fixes that problem.\n  - How Aging Works\n  - Example:\n      - Suppose priorities range from 0 (lowest) to 10 (highest).\n      - A process starts with priority 2.\n      - For every 5 time units it waits, its priority increases by 1.\n    - Eventually, it becomes high enough to run.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 119,
      "slide_text": "2.10 ALGORITHMS\n\nPriority scheduling runs importance first\u2014but needs an anti-starvation policy\n\n71\n\nPRIORITY RULE\n\nSelect highest-priority ready process\nCan be preemptive or non-preemptive\nPriority may be static or dynamic\n\nAGING\n\nGradually improves waiting-process priority\nEnsures long-waiting work eventually runs\nPreserves priority differentiation\n\nPriority without aging can postpone low-priority work indefinitely.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide says priority scheduling selects the highest-priority ready process, and aging helps prevent low-priority processes from waiting indefinitely.",
      "media": []
    },
    {
      "slide_num": 120,
      "slide_text": "RR Scheduling Algorithm\n\nTime Quantum (Q)\n  - A short fixed time (\u2248 10\u2013100 ms) a process can use the CPU\nRound Robin (RR) Scheduling\n  - Processes are placed in a single queue\n  - CPU is given to the process at the front of the queue\nHow It Works\n  - Each process runs for Q time units\n  - If not finished \u2192 moved to the end of the queue\n  - Next process gets the CPU\nKey Idea\n  - Fair CPU sharing using preemptive time-slicing",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 121,
      "slide_text": "Execution Under RR Scheduling.",
      "notes_text": "Captions\nThree processes with total CPU times of 4, 4, and 2 start executing under RR.\np1 executes for 1 quantum, then p2, then p3.\nThe same cycle repeats: p1, p2, p3 execute for 1 quantum each. p3 terminates.\np1 and p2 then share the CPU using RR until both terminate.",
      "media": [
        "ch2_slide121_image33.png"
      ]
    },
    {
      "slide_num": 122,
      "slide_text": "",
      "notes_text": "Captions\nThree processes with total CPU times of 4, 4, and 2 start executing under RR.\np1 executes for 1 quantum, then p2, then p3.\nThe same cycle repeats: p1, p2, p3 execute for 1 quantum each. p3 terminates.\np1 and p2 then share the CPU using RR until both terminate.",
      "media": [
        "ch2_slide122_image34.png"
      ]
    },
    {
      "slide_num": 123,
      "slide_text": "",
      "notes_text": "Captions\nThree processes with total CPU times of 4, 4, and 2 start executing under RR.\np1 executes for 1 quantum, then p2, then p3.\nThe same cycle repeats: p1, p2, p3 execute for 1 quantum each. p3 terminates.\np1 and p2 then share the CPU using RR until both terminate.",
      "media": [
        "ch2_slide123_image35.png"
      ]
    },
    {
      "slide_num": 124,
      "slide_text": "",
      "notes_text": "Captions\nThree processes with total CPU times of 4, 4, and 2 start executing under RR.\np1 executes for 1 quantum, then p2, then p3.\nThe same cycle repeats: p1, p2, p3 execute for 1 quantum each. p3 terminates.\np1 and p2 then share the CPU using RR until both terminate.",
      "media": [
        "ch2_slide124_image36.png"
      ]
    },
    {
      "slide_num": 125,
      "slide_text": "Exercise:\n\nTasks:\nDraw the Gantt Chart using Round Robin scheduling\nCalculate Completion Time (CT) for each process\nCalculate Turnaround Time (TAT = CT - AT)\nCalculate Waiting Time (WT = TAT - BT)\nCompute Average Waiting Time\nWhat happens if Q = 2 ms vs Q = 8 ms?\nWhich gives better responsiveness and why?",
      "notes_text": "",
      "media": [
        "ch2_slide125_image37.png"
      ]
    },
    {
      "slide_num": 126,
      "slide_text": "Gantt Chart\n  - 0\u20134: P1\n  - 4\u20138: P2\n  - 8\u201312: P3\n  - 12\u201316: P1\n  - 16\u201317: P2\n  - 17\u201321: P3\n  - 21\u201323: P1\nCompletion Time (CT)\n  - P1 = 23\n  - P2 = 17\n  - P3 = 21\nTurnaround Time\n  - TAT = CT - AT\n  - P1 = 23 - 0 = 23\n  - P2 = 17 - 1 = 16\n  - P3 = 21 - 2 = 19\nWaiting Time\n  - WT = TAT - BT\n  - P1 = 23 - 10 = 13\n  - P2 = 16 - 5 = 11\n  - P3 = 19 - 8 = 11\nAverage Waiting Time\n  - (13 + 11 + 11)/3 = 35/3 = 11.67 ms\nAverage Turnaround Time\n  - 23 + 16 + 19/3= 58/3 = 19.33 ms",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 127,
      "slide_text": "2.10 ALGORITHMS\n\nThe time quantum controls the balance between responsiveness and overhead\n\n74\n\nQUANTUM TOO SMALL\n\nFast rotation\nMany context switches\nLower useful CPU fraction\n\nQUANTUM TOO LARGE\n\nLower switch overhead\nSlower interactive response\nApproaches FCFS behavior\n\nChoose q well above context-switch time but short enough for the response target.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Abstraction in an operating system (OS) is the process of hiding raw, complex hardware details and presenting a clean, simplified model to users and programs. It turns physical components\u2014like transistors, disk sectors, and memory chips\u2014into organized, easy-to-use concepts like files, processes, and windows",
      "media": []
    },
    {
      "slide_num": 128,
      "slide_text": "Impact Of Quantum Size.\n\nn processes are time-sharing the CPU. The average total CPU time is T. The time quantum is Q. The context switching overhead is S. Determine the fraction of CPU time wasted on context switching for the following cases:\n  - (a)T < Q\n  - (b)T >> Q",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 129,
      "slide_text": "Answer\n\nn processes are time-sharing the CPU. The average total CPU time is T. The time quantum is Q. The context switching overhead is S. Determine the fraction of CPU time wasted on context switching for the following cases:\n  - (a)T < Q\n    - When T < Q, the quantum never expires. The execution repeats the timing sequence: T, S, T, S, ... . Thus for every T ms of execution, T + S ms of CPU time are needed. The fraction of wasted CPU time is S/(T + S).\n  - (b)T >> Q\n    - When T >> Q, each execution of T needs many quanta to complete. Each quantum is followed by a context switch. The fraction of wasted CPU time is S/(Q + S).",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 130,
      "slide_text": "2.10 ALGORITHMS\n\nNo basic algorithm dominates every scheduling criterion\n\n75\n\nGantt charts show order; metrics show performance.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nAlgorithm | Preemptive? | Main strength | Main drawback\nFCFS | No | Simple: processes run in arrival order. | A long job can delay all the short jobs behind it.\nSJF | No | Choosing short CPU bursts helps reduce average waiting time. | Requires burst-time estimates; long jobs may starve.\nSRTF | Yes | Newly arriving short jobs can run promptly. | More switching; long jobs may starve.\nPriority | Either | Gives preference to more important processes. | Low-priority processes may starve without measures such as aging.\nRound Robin | Yes | Gives ready processes regular turns, supporting interactive responsiveness. | A small quantum increases switching overhead; a large quantum increases delays between turns.",
      "notes_text": "This slide says no single scheduling algorithm is best at everything\u2014the best choice depends on the system\u2019s goals.",
      "media": []
    },
    {
      "slide_num": 131,
      "slide_text": "ACTIVE LEARNING\n\nConcept check: can SRTF starve a long job?\n\n76\n\nQUESTION\n\nA long CPU-bound job is ready. Short I/O-bound jobs keep arriving. What may happen under SRTF, and how could the OS prevent it?\n\nDISCUSS\n\n1. Think individually\n2. Compare reasoning with a partner\n3. Defend one answer using OS state and cost\n\nBe ready to explain the mechanism\u2014not only the answer.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide asks whether SRTF can make a long job wait indefinitely and how the OS could prevent that.\nTarget: repeated short arrivals may indefinitely postpone the long job. Aging, maximum wait bounds, or a multilevel feedback policy can raise its effective priority.\nYes\u2014SRTF can cause starvation if processes with shorter remaining CPU bursts keep becoming ready.",
      "media": []
    },
    {
      "slide_num": 132,
      "slide_text": "SECTION 2.11\n\nAdvanced Scheduling\n\nModern schedulers combine queues, feedback, affinity, balancing, and deadline policies\n\n2.11 / 11\n\n77\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 133,
      "slide_text": "2.11 ADVANCED\n\nMultilevel queues separate classes; feedback queues also move processes\n\n78\n\nMULTILEVEL QUEUE (MLQ)\n\nFixed assignment to a queue\nEach queue may use its own algorithm\nScheduling also occurs among queues\n\nMULTILEVEL FEEDBACK (MLFQ)\n\nProcesses move between queues\nBehavior changes priority dynamically\nFavors short or interactive bursts\n\nFeedback approximates burst prediction using observed behavior.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Treat different classes of processes differently.",
      "media": [
        "ch2_slide133_image38.png",
        "ch2_slide133_image39.png"
      ]
    },
    {
      "slide_num": 134,
      "slide_text": "MULTILEVEL QUEUE (MLQ)",
      "notes_text": "",
      "media": [
        "ch2_slide134_image41.png",
        "ch2_slide134_image40.png",
        "ch2_slide134_image42.png"
      ]
    },
    {
      "slide_num": 135,
      "slide_text": "Process p is in the queue at level N-3, followed by process q at the same level. Queues at levels N through N-2 are empty. The quantum size is 1 time unit.\n  - 1) If p needs 2 units of CPU time and q needs 1 unit of CPU time, process _________ will terminate first.\n    - p\n    - q\n  - 2) When p starts executing, a new process r with a CPU time requirement of 3 units arrives at level N. The 3 processes will terminate in the order _________.\n    - r, p, q\n    - r, q, p\n    - p, r, q",
      "notes_text": "Multilevel (ML)",
      "media": []
    },
    {
      "slide_num": 136,
      "slide_text": "",
      "notes_text": "Multilevel (ML)",
      "media": [
        "ch2_slide136_image43.png"
      ]
    },
    {
      "slide_num": 137,
      "slide_text": "Queue priorities are Q0 > Q1 > Q2; always select from the highest-priority nonempty queue.\nQ0 and Q1 use Round Robin, with processes joining the tail of the queue.\nAssume no I/O, no aging or priority boosts, and zero context-switch overhead.",
      "notes_text": "",
      "media": [
        "ch2_slide137_image44.png"
      ]
    },
    {
      "slide_num": 138,
      "slide_text": "Answer\nStep 1: Scheduling\n  - t = 0 to 2: P1 runs in Q0 for 2 ms, remaining = 8 \u2192 moves to Q1\n  - t = 2 to 4: P2 runs in Q0 for 2 ms, remaining = 2 \u2192 moves to Q1\n  - t = 4 to 6: P3 runs in Q0 for 2 ms, remaining = 4 \u2192 moves to Q1\nNow Q0 is empty, so move to Q1:\n  - t = 6 to 10: P1 runs in Q1 for 4 ms, remaining = 4 \u2192 moves to Q2\n  - t = 10 to 12: P2 runs in Q1 for 2 ms and finishes\n  - t = 12 to 16: P3 runs in Q1 for 4 ms and finishes\nNow Q1 is empty, so move to Q2:\n  - t = 16 to 20: P1 runs in Q2 and finishes\nGantt Chart\n  - 0\u20132 P1 | 2\u20134 P2 | 4\u20136 P3 | 6\u201310 P1 | 10\u201312 P2 | 12\u201316 P3 | 16\u201320 P1\nQueue Movement\n  - P1: Q0 \u2192 Q1 \u2192 Q2\n  - P2: Q0 \u2192 Q1 \u2192 Finished\n  - P3: Q0 \u2192 Q1 \u2192 Finished",
      "notes_text": "At time 1, P2 does not interrupt P1: Both are in Q0, so P1 continues until its 2 ms quantum expires.\nAt time 16, P3 finishes exactly at the end of its Q1 quantum: It exits rather than moving to Q2. Demotion applies only if the process still needs CPU time.",
      "media": [
        "ch2_slide138_image45.png"
      ]
    },
    {
      "slide_num": 139,
      "slide_text": "Question: Multilevel Feedback Queue Scheduling\nA system uses Multilevel Feedback Queue (MLFQ) scheduling with four queues:\nQueue\t\t\tScheduling algorithm\t\tTime quantum\nQ0 \u2014 highest priority\t\tRound Robin\t\t1 ms\nQ1\t\t\tRound Robin\t\t2 ms\nQ2\t\t\tRound Robin\t\t4 ms\nQ3 \u2014 lowest priority\t\tFCFS\t\t\tNo fixed quantum\nScheduling rules\n  - New processes enter Q0.\n  - The CPU always selects a process from the highest-priority nonempty queue.\n  - New arrivals and demoted processes join the tail of their destination queue.\n  - A process in Q0, Q1, or Q2 that uses its entire quantum and remains unfinished moves down one level.\n  - A process that finishes exits immediately, including when it finishes exactly as its quantum expires.\n  - If arrival times are equal, use the order listed in the table: P1 before P2.\n  - Assume no I/O, no aging or priority boosts, and zero context-switch overhead.\nProcess\tArrival time\tCPU burst\nP1\t0 ms\t\t8 ms\nP2\t0 ms\t\t3 ms\nP3\t1 ms\t\t5 ms\n  - Tasks\n  - Draw the Gantt chart.\n  - Show each process\u2019s queue movements and completion time.\n  - Identify which process finishes in the highest-priority queue and explain why it finishes first in this example.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 140,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide140_image46.png"
      ]
    },
    {
      "slide_num": 141,
      "slide_text": "",
      "notes_text": "",
      "media": [
        "ch2_slide141_image47.png"
      ]
    },
    {
      "slide_num": 142,
      "slide_text": "2.11 ADVANCED\n\nA feedback scheduler adapts priority from observed CPU use\n\n79\n\nNew job\n\nenter high queue\n\nShort burst\n\nfinish quickly\n\nUses quantum\n\nmove downward\n\nWaits too long\n\nage upward \u2192 Dispatch: highest nonempty queue\n\nQueue count, quantum sizes, promotion, and demotion rules define the policy.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide shows how a feedback scheduler changes priorities: new jobs start high, jobs that use their full CPU allocation move down, and jobs that wait too long can move up.",
      "media": []
    },
    {
      "slide_num": 143,
      "slide_text": "2.11 ADVANCED\n\nMultiprocessor scheduling must place work as well as order it\n\n80\n\nGLOBAL QUEUE\n\nshared ready work\n\nPER-CPU QUEUE\n\nlocal scheduling\n\nLOAD BALANCE\n\nmove work among CPUs\n\nAFFINITY\n\nkeep cache locality\n\nNUMA AWARENESS\n\nkeep work near memory\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide says that with multiple CPUs or cores, the OS must decide both which process or thread runs next and where it runs.",
      "media": []
    },
    {
      "slide_num": 144,
      "slide_text": "[TABLE]\nConcept | Meaning | Why it matters\nGlobal queue | CPUs select tasks from one shared ready queue. | Available CPUs can take available work, but access to the shared queue requires coordination.\nPer-CPU queue | Each CPU has its own ready queue. | Scheduling can happen locally, but some CPUs may have more work than others.\nLoad balancing | Redistribute tasks among CPUs. | Avoid having one CPU overloaded while another is idle.\nProcessor affinity | Prefer or require a task to run on a particular CPU or set of CPUs. | Returning to the same CPU can reuse instructions and data already in its cache.\nNUMA awareness | Schedule tasks near the main memory containing their data. | On NUMA systems, accessing local memory is generally faster than accessing another node\u2019s memory.",
      "notes_text": "With one CPU, scheduling mainly answers \u201cWho runs next?\u201d With multiple CPUs, it also answers \u201cWhich CPU should run this task?\u201d\nExample: CPU 0 has four ready tasks, while CPU 1 is idle. Moving a task to CPU 1 can reduce waiting and let both CPUs work.\nHowever, moving that task may have a cost:\nIts useful data may already be in CPU 0\u2019s cache.\nOn a NUMA system, its data may be in memory local to CPU 0\u2019s node.\nThe scheduler therefore balances spreading the work against preserving efficient access to data.\nNUMA stands for Non-Uniform Memory Access: memory-access speed depends on which processor accesses which memory location.",
      "media": []
    },
    {
      "slide_num": 145,
      "slide_text": "2.11 ADVANCED\n\nNUMA makes CPU placement a memory-latency decision\n\n81\n\nCPU PACKAGE 0\n\ncores 0\u20133 \u2022 shared cache\n\nLOCAL MEMORY 0\n\nlower latency for package 0\n\nINTERCONNECT\n\nremote access costs more\n\nCPU PACKAGE 1\n\ncores 4\u20137 \u2022 shared cache\n\nLOCAL MEMORY 1\n\nlower latency for package 1\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nAffinity helps most when thread placement and memory placement stay aligned.",
      "notes_text": "Ask: If a thread moves from package 0 to package 1 but its pages remain on node 0, what changes? Expected: load may improve, but remote-memory latency and cache misses may increase.\nIn NUMA, a node is usually a group of CPU cores together with the RAM that is local to those cores.",
      "media": []
    },
    {
      "slide_num": 146,
      "slide_text": "2.11 ADVANCED\n\nLoad balancing can conflict with processor affinity\n\n82\n\nLOAD BALANCING\n\nAvoid idle processors\nPush or pull runnable work\nImproves aggregate utilization\n\nPROCESSOR AFFINITY\n\nPrefer the same processor\nPreserves warm caches and locality\nCan be soft or hard\n\nMoving a task may balance load but destroy useful locality.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains a trade-off: moving tasks can keep more CPUs busy, while keeping tasks on the same CPU can preserve faster access to cached data.\nLoad balancing distributes runnable tasks across CPUs so that one CPU is not overloaded while another is idle.\nPush: Work is moved from a busy CPU\u2019s queue to a less busy CPU.\nPull: An idle or less busy CPU takes work from another CPU\u2019s queue.\nAggregate utilization: How effectively the CPUs are being used overall.\nProcessor affinity keeps a task on the same CPU, or within a selected group of CPUs.\nThe benefit is a warm cache: the CPU\u2019s cache already contains useful instructions and data from the task\u2019s previous execution. \u201cWarm\u201d refers to useful cached content, not temperature.\nSoft affinityThe scheduler prefers the same CPU but may move the task when beneficial.\nHard affinityThe task is restricted to a specified CPU or set of CPUs until that restriction changes.",
      "media": []
    },
    {
      "slide_num": 147,
      "slide_text": "2.11 ADVANCED\n\nReal-time scheduling focuses on meeting timing constraints\n\n83\n\nSOFT REAL TIME\n\nOccasional misses degrade quality\nExamples: media and interactive control\nBest effort with priority\n\nHARD REAL TIME\n\nA missed deadline is system failure\nRequires bounded execution and blocking\nNeeds analyzable admission\n\nReal-time correctness includes both the result and when it arrives.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains that real-time scheduling aims to finish tasks before their deadlines, and that missing a deadline has different consequences in soft and hard real-time systems.\nA deadline is the latest time by which a task must finish. Real-time does not simply mean \u201cvery fast\u201d\u2014it means finishing within the required time.\nSoft real-time :\nMeet deadlines, but some misses are acceptable.\nIf a deadline is missedQuality or responsiveness decreases.\nExampleA video call: a late frame may cause a brief freeze.\nHard real-time:\nEvery required deadline must be met under the system\u2019s specified operating conditions.\nIf a deadline is missed The system has violated a correctness requirement.\nExample: A machine\u2019s safety controller: a stop command must arrive before a specified deadline.",
      "media": []
    },
    {
      "slide_num": 148,
      "slide_text": "2.11 ADVANCED\n\nRMS uses fixed priorities; EDF uses nearest deadline\n\n84\n\nRATE-MONOTONIC\n\nFixed priority\nShorter period \u2192 higher priority\nAnalyzable periodic tasks\n\nEARLIEST-DEADLINE-FIRST\n\nDynamic priority\nNearest deadline runs first\nHigher possible utilization (up to 100%)\n\nAssumptions about periods, deadlines, and execution time determine schedulability.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide compares two real-time scheduling algorithms: RMS gives higher priority to tasks that repeat more frequently, while EDF runs the ready job with the earliest deadline.",
      "media": []
    },
    {
      "slide_num": 149,
      "slide_text": "2.11 LINUX CONTEXT\n\nLinux fair scheduling is moving from CFS toward EEVDF\n\n85\n\nCFS FOUNDATION\n\n\u2022 Models an ideal fair CPU\n\u2022 Tracks normalized virtual runtime\n\u2022 Historically selects the task with smallest vruntime\n\nEEVDF DIRECTION\n\n\u2022 Linux began transitioning in kernel 6.6\n\u2022 Eligible tasks have nonnegative lag\n\u2022 Earliest virtual deadline runs next\n\nBoth pursue fairness; EEVDF adds deadline-based responsiveness for eligible tasks.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "This slide explains how Linux shares CPU time fairly and how EEVDF improves responsiveness while maintaining fairness.\nCFS means Completely Fair Scheduler. Its basic idea is to give each runnable task its fair share of CPU time.\nEEVDF means Earliest Eligible Virtual Deadline First. Linux began its transition toward EEVDF in kernel 6.6. It makes the scheduling decision in two steps:\nCheck eligibility. Is the task owed CPU time, or exactly caught up with its fair share?\nCompare virtual deadlines. Among eligible tasks, select the earliest virtual deadline.",
      "media": []
    },
    {
      "slide_num": 150,
      "slide_text": "SYNTHESIS\n\nChapter 2 connects execution, coordination, and scheduling\n\n86\n\nProcess\n\nowns resources\n\nThread\n\nexecutes within process\n\nIPC\n\ncoordinates processes\n\nScheduler\n\nselects the next runnable entity\n\nNext: synchronization, race conditions, and safe coordination among concurrent activities.\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Process \u2014 owns resources: A process provides the resources needed by a running program, such as its address space and open files.\nThread \u2014 executes within a process : A thread executes instructions. Threads in the same process share many resources, but each has its own execution state and stack.\nIPC \u2014 coordinates processes : Interprocess Communication lets processes exchange information using mechanisms such as pipes, message passing, and shared memory.\nScheduler \u2014 selects the next runnable entity : The scheduler chooses which ready task gets CPU time next\u2014typically a thread in modern operating systems.",
      "media": []
    },
    {
      "slide_num": 151,
      "slide_text": "End of Chapter 2",
      "notes_text": "",
      "media": []
    }
  ],
  "ch3": [
    {
      "slide_num": 1,
      "slide_text": "Operating Systems\n\nCSC4320, CSC6320\nFALL 2026\nDr. Roya Hosseini\n\nChapter 3: Concurrency and Synchronization\n\n01\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Chapter 3",
      "media": []
    },
    {
      "slide_num": 2,
      "slide_text": "\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCopyright and Use Notice\n\nThese slides were prepared by Dr. Roya Hosseini for\n\nCSC4320, CSC6320: Operating Systems at Georgia State University.\n\nThese materials are provided for instructional use only.\n\nUnauthorized copying, posting, sharing, selling, or redistribution of these materials is not permitted\n\nwithout written permission from the instructor.\n\n\u00a9 Dr. Roya Hosseini, Georgia State University, Fall 2026\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 3,
      "slide_text": "CHAPTER 3\n\nChapter 3 Outline\n\n03\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n3.1\n\nFoundations of Concurrency\n\n3.2\n\nRace Conditions and Critical Sections\n\n3.3\n\nSoftware Synchronization Solutions\n\n3.4\n\nHardware Support for Synchronization\n\n3.5\n\nMutexes and Semaphores\n\n3.6\n\nMonitors and Condition Variables\n\n3.7\n\nClassical Synchronization Problems\n\n3.8\n\nPractical Concurrent Programming",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 4,
      "slide_text": "CHAPTER 3\n\nLearning Objectives\n\n04\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nTrace inter-leavings and explain how a shared update can fail.\nEvaluate mutual exclusion, progress, and bounded waiting.\nChoose and apply locks, semaphores, and condition variables.\nReason about correctness, fairness, and performance in concurrent programs.",
      "notes_text": "Connection to Chapter 2: scheduling chooses which runnable thread executes. This chapter studies what happens when those executions access shared state. Detailed deadlock characterization and algorithms belong to Chapter 4.",
      "media": []
    },
    {
      "slide_num": 5,
      "slide_text": "SECTION 3.1\n\nFoundations of Concurrency\n\nOverlapping activities, shared state, and execution order\n\n3.1 / 8\n\n05\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Overlapping activities, shared state, and execution order",
      "media": []
    },
    {
      "slide_num": 6,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nConcurrent versus Parallel Execution\n\n06\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCONCURRENT\n\nPARALLEL\n\nTwo or more tasks make progress during overlapping periods.\nA single core can alternate among tasks.\nExample: a server overlaps one request\u2019s I/O wait with another request\u2019s work.\n\nTwo or more tasks execute at the same instant.\nMultiple execution resources run work simultaneously.\nExample: two cores process two image regions at once.\n\nA program can be concurrent even when no two instructions execute simultaneously.",
      "notes_text": "This slide explains concurrent versus parallel execution\nConcurrency:  in an operating system refers to the ability to execute multiple processes or threads simultaneously, improving resource utilization and system efficiency. It allows several tasks to be in progress at the same time, either by running on separate processors or through context switching on a single processor.\nFurther reading / technical references:\nHttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf\nhttps://www.geeksforgeeks.org/operating-systems/concurrency-in-operating-system/",
      "media": []
    },
    {
      "slide_num": 7,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nOne Core versus Two Cores\n\n07\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nExecution resource | Slot 1 | Slot 2 | Slot 3 | Slot 4\nOne core | A | B | A | B\nCore 0 | A | A | A | A\nCore 1 | B | B | B | B\n\nThe first row shows interleaving. The last two rows show simultaneous execution.",
      "notes_text": "This slide shows two separate scenarios for running tasks A and B. Each slot represents a time interval.\nThe rows are two separate scenarios. Slots are illustrative, equal-length intervals, not measured timing. A and B label tasks. Parallelism does not remove the need to synchronize shared data.",
      "media": []
    },
    {
      "slide_num": 8,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nProcess and Thread Concurrency\n\n08\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCONCURRENT PROCESSES\n\nCONCURRENT THREADS\n\nEach process normally has its own virtual address space.\nProcesses coordinate through IPC.\nShared-memory mappings and external resources can still create shared state.\n\nThreads in one process share its address space.\nEach thread has its own registers and stack.\nShared variables make communication convenient and coordination necessary.\n\nSeparate processes can race too, for example when updating the same shared file.",
      "notes_text": "This slide explains how processes and threads share data\u2014and why both may need synchronization.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf",
      "media": []
    },
    {
      "slide_num": 9,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nShared Data and Thread-Local State\n\n09\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nState | Usually shared? | Synchronization concern\nGlobal variables and heap objects | Yes, within a process | Concurrent reads and writes\nThread registers | No | Execution context of that thread\nLocal stack variables | Usually private | A pointer can expose them to other threads\nFiles and shared-memory regions | May cross processes | A suitable cross-process protocol is needed\n\n\u201cLocal variable\u201d describes storage location, not a guarantee that no other thread can access it.",
      "notes_text": "\u201cLocal variable\u201d describes a storage location, not a guarantee that no other thread can access it.\nThis slide explains which data threads share and which execution information belongs to each thread. Here, state means the data and values a program currently holds.\nGlobal variables and heap objectsThreads in the same process can access them. If multiple threads access the same data and at least one modifies it, coordination may be needed.\nThread registersEach thread has its own register values, such as its program counter and temporary calculation results. During a context switch, the system saves and restores these values\nLocal stack variablesEach function call normally has its own local variables on the calling thread\u2019s stack. However, another thread can access them if given a valid pointer.\nFiles and shared-memory regionsThese can be accessed by different processes, so coordination must work across those processes\u2014for example, using an appropriate file lock or shared semaphore.",
      "media": []
    },
    {
      "slide_num": 10,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nInterleaved Execution\n\n10\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\n// Initial value: counter = 0\n// Both threads execute:\nr = counter;\nr = r + 1;\ncounter = r;\n\nOne source-level increment may require several machine operations.\nA context switch can occur between operations.\nOn multiple cores, operations can also overlap in real time.\n\nThe scheduler does not automatically make a multi-step update indivisible.",
      "notes_text": "Interleaved execution means that steps from different threads are mixed together. One thread can pause partway through an operation while another thread runs.\n\u201c\u201dExample 1: r is a separate local register for each thread. Use a sequentially consistent teaching model with individually atomic loads and stores. Real unsynchronized C/C++ access to a non-atomic counter has undefined behavior.\n\u201c\u201d Example 2: Each call has its own x. Changing Thread A\u2019s x does not change Thread B\u2019s x.\nHowever, if Thread A gives Thread B the address of A\u2019s x, then B can access that same variable while it remains alive. A thread\u2019s stack is not a protected memory compartment within the process.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf\nhttps://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf",
      "media": [
        "ch3_slide10_image1.png"
      ]
    },
    {
      "slide_num": 11,
      "slide_text": "Each thread has its own r, but both access the same counter. We can label their temporary values rA and rB.\nConsider this possible execution order:\n\nThe final value is 1 instead of 2. Both threads calculated their result using the original value of 0. B\u2019s write does not add another 1; it writes its already-calculated value of 1. This is a lost update caused by a race condition.\nThis can happen on one core through context switches, or on multiple cores with simultaneous execution.",
      "notes_text": "",
      "media": [
        "ch3_slide11_image3.png",
        "ch3_slide11_image2.png"
      ]
    },
    {
      "slide_num": 12,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nNondeterministic Execution\n\n11\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nWHY EXECUTION ORDER CHANGES\n\nWHAT CAN REMAIN CORRECT\n\nTimer interrupts and preemption\nI/O completion and external events\nCore scheduling, cache behavior, and competing work\n\nThreads may finish in different orders.\nA synchronized counter can still produce the same final total.\nCorrectness depends on required invariants, not one preferred schedule.\n\nNondeterminism is normal. An outcome that violates the specification is a bug.",
      "notes_text": "Nondeterminism is normal. An outcome that violates the specification is a bug.\nNondeterministic execution means the order of execution can change between runs, even with the same program and input. Thread A might run first today, while Thread B runs first the next time.",
      "media": []
    },
    {
      "slide_num": 13,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nBenefits and Challenges of Concurrency\n\n12\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nBENEFITS\n\nCHALLENGES\n\nKeep an application responsive while work continues.\nOverlap computation with I/O waits.\nUse multiple cores when work can run in parallel.\n\nProtect shared data and coordinate dependencies.\nAvoid deadlock, starvation, and lost wakeups.\nControl synchronization overhead and reproduce timing bugs.\n\nMore threads help only when useful overlap exceeds the added coordination cost.",
      "notes_text": "This slide explains how concurrency helps applications\u2014and what makes concurrent programs difficult to build correctly.\nMore threads help only when useful overlap exceeds the added coordination cost.\nResponsiveness: An application can respond to the user while another task continues. For example, you can keep typing while a background task saves your document.\nOverlap computation with I/O: While one task waits for a disk read or network response, the CPU can execute another task. This helps even on one core.\nUse multiple cores: Independent tasks can execute simultaneously. For example, different cores can process different sections of an image.\nThe challenges are:\nProtect shared data: Prevent conflicting updates, such as the lost increment in the counter example.\nCoordinate dependencies: Ensure a task waits for something it needs\u2014for example, a consumer must wait until a producer supplies data.\nDeadlock: Tasks wait indefinitely for one another. For example, A holds a lock B needs, while B holds a lock A needs.\nStarvation: One task keeps being denied CPU time or a resource while other tasks continue making progress.\nLost wakeup: A task misses a notification because checking a condition and going to sleep are not coordinated correctly. It may remain asleep even though it could proceed.\nSynchronization overhead: Acquiring locks, waiting, and managing coordination consume time and resources.\nTiming bugs: A bug may occur only under a particular execution order, making it difficult to reproduce and debug.",
      "media": []
    },
    {
      "slide_num": 14,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nConcurrency on One Core \u2013 question\n\n13\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCLASSROOM DISCUSSION\n\nA single-core computer runs two threads that update the same counter.\n1. Are the threads concurrent?\n2. Are they executing in parallel?\n3. Can a race condition occur?\n\nThink individually, compare with a partner, and justify your answer using an execution trace.",
      "notes_text": "1-Are the threads concurrent? Yes.The CPU can alternate between them, allowing both to make progress during overlapping periods.\n2-Are they executing in parallel? No.In this single-core model, only one thread executes at a time.\n3-Can a race condition occur? Yes, if their updates are not properly synchronized.The CPU can switch threads in the middle of a counter update.",
      "media": []
    },
    {
      "slide_num": 15,
      "slide_text": "3.1  FOUNDATIONS OF CONCURRENCY\n\nConcurrency on One Core \u2013 answer\n\n14\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nYes. Their executions overlap in time through interleaving.\nNo. Only one thread executes on the core at an instant.\nYes. A context switch can split a read\u2013modify\u2013write update.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 16,
      "slide_text": "Exercise :\nDoes adding a thread help?\nA program runs on a single-core computer and performs two independent tasks:\nTask A: Waits 10 milliseconds for a disk read.\nTask B: Performs 6 milliseconds of CPU computation.\nThe disk can perform the read while the CPU executes Task B. Initially, ignore coordination overhead.\nQuestions:\nIf Task A finishes before Task B starts, how long do both tasks take?\nIf two threads overlap these tasks, what is the ideal total time?\nAre these threads concurrent? Are they executing CPU instructions in parallel?\nSuppose thread coordination adds 2 milliseconds to the ideal concurrent time. Does concurrency still improve performance? By how much?\nIf both tasks instead required only CPU computation, could one core execute them in parallel? What could two cores change?",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 17,
      "slide_text": "The useful overlap saves 6 ms before overhead. Since coordination costs only 2 ms, there is a net benefit.",
      "notes_text": "",
      "media": [
        "ch3_slide17_image4.png"
      ]
    },
    {
      "slide_num": 18,
      "slide_text": "Exercise :\nShared counter, different outcomes\nTwo threads, A and B, belong to the same process. They share a global variable, initially counter = 10.\nEach thread executes the following simplified pseudocode once, without synchronization. Each has its own private temporary variable r.\nr = counter\nr = r + 1\ncounter = r\nQuestions:\nWhich variable is shared, and which is private to each thread?\nWhat final value is intended after both threads finish?\nShow an execution order that produces an incorrect final value. Can this happen on one core?\nShow an execution order that produces the correct value. Why might different runs produce different results?\nIf A and B belonged to separate processes, would ordinary global variables named counter automatically refer to the same data? How could the processes deliberately share data?\nWith a mutex protecting the entire increment, must A always finish before B? What final value should be guaranteed?",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 19,
      "slide_text": "Answer key:\ncounter is shared. A and B have separate temporary values, which we can call rA and rB.\nThe intended final value is 12.\nOne incorrect execution is:\n\nThe result is 11, a lost update. This can happen on one core through interleaving.",
      "notes_text": "4. A completes all three steps, changing the counter to 11; B then reads 11 and changes it to 12. Scheduling and timing can change the execution order between runs.\n5. No. Separate processes normally have separate address spaces. They can communicate through IPC, including deliberately shared memory, or coordinate access to a shared file.\n6. Either thread may finish first. With correct locking, the final counter must be 12 after both finish.",
      "media": [
        "ch3_slide19_image5.png"
      ]
    },
    {
      "slide_num": 20,
      "slide_text": "4. A completes all three steps, changing the counter to 11; B then reads 11 and changes it to 12. Scheduling and timing can change the execution order between runs.\n5. No. Separate processes normally have separate address spaces. They can communicate through IPC, including deliberately shared memory, or coordinate access to a shared file.\n6. Either thread may finish first. With correct locking, the final counter must be 12 after both finish.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 21,
      "slide_text": "Exam1, end of the session for October 7, and 8",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 22,
      "slide_text": "SECTION 3.2\n\nRace Conditions and Critical Sections\n\nProtecting shared invariants under every allowed interleaving\n\n3.2 / 8\n\n15\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Protecting shared invariants under every allowed interleaving",
      "media": []
    },
    {
      "slide_num": 23,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nRace Conditions and Data Races\n\n16\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nRACE CONDITION\n\nDATA RACE\n\nCorrectness depends on an uncontrolled ordering of events.\nExample: two threads both observe the final available seat and both book it.\nA check-then-act sequence can race even when each separate operation is thread-safe.\n\nConflicting memory accesses occur without the required synchronization.\nAt least one access writes the same memory location.\nIn C/C++, a data race on ordinary shared data causes undefined behavior.\n\nA data race is a memory-model violation. A race condition is the broader correctness problem.",
      "notes_text": "For C/C++ the precise definition includes different threads, a non-atomic conflicting access, and absence of a happens-before ordering. Do not promise a finite list of outcomes for a real C/C++ program containing such a race.\nFurther reading / technical references:\nhttps://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf",
      "media": []
    },
    {
      "slide_num": 24,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nA Shared Increment Is a Multi-Step Operation\n\n17\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\n// Teaching model: counter starts at 0\n// Each thread increments once\nT1: a = counter;\na = a + 1;\ncounter = a;\nT2: b = counter;\nb = b + 1;\ncounter = b;\n\nIntended final value: 2.\na and b are private to their threads.\nThe read and write are individually atomic in this model.\nThe entire increment is not atomic.\n\nTwo correct local calculations can produce an incorrect shared result.",
      "notes_text": "This is a conceptual interleaving exercise, not valid race-free C code. C/C++ undefined behavior is discussed on the preceding slide.",
      "media": []
    },
    {
      "slide_num": 25,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nLost Update: Execution Trace\n\n18\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nStep | Thread 1 | Thread 2 | counter\n1 | a = counter  // a = 0 | \u2014 | 0\n2 | \u2014 | b = counter  // b = 0 | 0\n3 | a = a + 1  // a = 1 | \u2014 | 0\n4 | \u2014 | b = b + 1  // b = 1 | 0\n5 | counter = a | \u2014 | 1\n6 | \u2014 | counter = b | 1\n\nThread 2 overwrites the same value. One logical increment disappears.",
      "notes_text": "Ask students for a second legal interleaving that produces 2. Completing all of T1 before T2 is one example. These outcomes refer only to the stated abstract model.",
      "media": []
    },
    {
      "slide_num": 26,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nThe Critical-Section Structure\n\n19\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nwhile (true) {\nentry_section();\ncritical_section();\nexit_section();\nremainder_section();\n}\n\nEntry: request permission to access protected state.\nCritical: read or modify the shared invariant.\nExit: release the protection.\nRemainder: perform unrelated work.\n\nCritical sections using the same protected state must follow one consistent protocol.",
      "notes_text": "Critical sections using the same protected state must follow one consistent protocol.",
      "media": []
    },
    {
      "slide_num": 27,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nThree Correctness Requirements\n\n20\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nRequirement | Meaning | Failure example\nMutual exclusion | At most one participant occupies the protected critical section. | Two threads update the same list links at once.\nProgress | If entry is possible and threads want to enter, selection cannot be postponed indefinitely. | An uninterested thread controls whose turn it is.\nBounded waiting | After a request, there is a bound on how many times others may enter first. | One thread repeatedly loses the lock forever.\n\nMutual exclusion addresses safety. Progress and bounded waiting address liveness.",
      "notes_text": "Standard assumptions: each participant continues to get execution opportunities, critical sections terminate, and a participant does not crash while holding the resource. Bounded waiting counts overtaking entries, not necessarily elapsed milliseconds.",
      "media": []
    },
    {
      "slide_num": 28,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nProgress and Bounded Waiting\n\n21\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nPROGRESS\n\nBOUNDED WAITING\n\nAsks whether some waiting participant can advance.\nA thread in its remainder section must not prevent entry.\nProgress alone can allow one unlucky thread to starve.\n\nAsks whether each request has a bounded amount of overtaking.\nA fair queue can constrain who enters next.\nA fixed waiting-time bound needs scheduling and execution-time assumptions too.\n\nA system can keep doing work while one particular thread never gets served.",
      "notes_text": "A system can keep doing work while one particular thread never gets served.",
      "media": []
    },
    {
      "slide_num": 29,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nThread Safety and Reentrant Code\n\n22\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nTHREAD-SAFE CODE\n\nREENTRANT CODE\n\nConcurrent calls satisfy the documented contract.\nInternal locking can protect shared mutable state.\nThread-safe individual methods do not automatically make a sequence atomic.\n\nA new invocation can run before an earlier invocation finishes.\nPer-call state avoids interference among overlapping invocations.\nA nonrecursive internal mutex can deadlock if an interrupting call reenters the function.\n\nThread safety and reentrancy describe different usage guarantees.",
      "notes_text": "Reentrancy can involve recursion, callbacks, or interruption. It is not synonymous with async-signal safety. POSIX signal handlers may call only the permitted async-signal-safe functions and must follow signal-specific data access rules.",
      "media": []
    },
    {
      "slide_num": 30,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nShared Scratch State versus Per-Call State\n\n23\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nSHARED SCRATCH BUFFER\n\nCALLER-PROVIDED BUFFER\n\nstatic char scratch[80];\nchar *format_id(int id) {\nformat_into(scratch, id);\nreturn scratch;\n}\n\nvoid format_id(int id,\nchar *out) {\nformat_into(out, id);\n}\n// Each call uses its own out.\n\nSeparate buffers remove this shared-state hazard. Helper functions must satisfy the same contract.",
      "notes_text": "Conceptual pseudocode. A real implementation must pass buffer capacity and check truncation. Caller-owned buffers help only if callers do not share the same mutable buffer unsafely. This example makes no signal-safety claim.",
      "media": []
    },
    {
      "slide_num": 31,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nOne Remaining Seat \u2013 question\n\n24\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCLASSROOM DISCUSSION\n\nTwo threads execute:\nif (seats > 0)\nseats = seats - 1;\nEach read and write is atomic. Is the reservation operation safe?\n\nThink individually, compare with a partner, and justify your answer using an execution trace.",
      "notes_text": "Distinguish making a variable atomic from making the whole business operation atomic. The essential invariant is that successful reservations cannot exceed capacity.",
      "media": []
    },
    {
      "slide_num": 32,
      "slide_text": "3.2  RACE CONDITIONS AND CRITICAL SECTIONS\n\nOne Remaining Seat \u2013 answer\n\n25\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nNo. Both threads can read seats = 1 before either completes the update.\nThe check and update must form one protected operation.\nProtect the entire reservation with one mutex, or use a suitable atomic compare-and-swap protocol.",
      "notes_text": "Distinguish making a variable atomic from making the whole business operation atomic. The essential invariant is that successful reservations cannot exceed capacity.",
      "media": []
    },
    {
      "slide_num": 33,
      "slide_text": "SECTION 3.3\n\nSoftware Synchronization Solutions\n\nEvaluating protocols before relying on hardware primitives\n\n3.3 / 8\n\n26\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Evaluating protocols before relying on hardware primitives",
      "media": []
    },
    {
      "slide_num": 34,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nStrict Alternation with a Turn Variable\n\n27\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nPseudocode: atomic reads/writes and sequential consistency\n\n// Shared: turn = 0\n// Thread i, other thread j = 1 - i\nwhile (true) {\nwhile (turn != i) { }\ncritical_section();\nturn = j;\nremainder_section();\n}\n\nOnly the thread named by turn can enter.\nEach thread hands the next turn to the other.\nThis enforces alternation even when the other thread does not want to enter.\n\nUnder the teaching assumptions, strict alternation gives mutual exclusion but fails progress.",
      "notes_text": "Assume atomic reads/writes and sequential consistency. This algorithm is not presented as valid plain-variable C/C++ synchronization.",
      "media": []
    },
    {
      "slide_num": 35,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nWhy Strict Alternation Fails Progress\n\n28\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nStep | Thread 0 | Thread 1 | turn\n1 | Enters and exits the critical section | Remainder section | 1 after exit\n2 | Wants to enter again | Still doing unrelated work | 1\n3 | Spins although the critical section is empty | Does not request entry | 1\n\nThread 1 can delay Thread 0 while staying outside the entry protocol.",
      "notes_text": "Thread 1 can delay Thread 0 while staying outside the entry protocol.",
      "media": []
    },
    {
      "slide_num": 36,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nA Shared Boolean Flag Is Not Enough\n\n29\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\n// Shared: locked = false\nwhile (locked) { }\nlocked = true;\ncritical_section();\nlocked = false;\n\nThread 0 can observe locked == false.\nThread 1 can observe the same value before Thread 0 sets it.\nBoth then set locked = true and enter.\n\nTesting and setting the flag must be one indivisible operation.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
      "media": []
    },
    {
      "slide_num": 37,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nPeterson\u2019s Two-Thread Solution\n\n30\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\n// Shared: flag[2] = {false, false}\n// Shared: turn\n// Thread i uses j = 1 - i\nflag[i] = true;\nturn = j;\nwhile (flag[j] && turn == j) { }\ncritical_section();\nflag[i] = false;\n\nflag[i] announces that i wants to enter.\nturn = j gives the other thread priority when both want entry.\nThe loop waits only when the other thread is interested and has priority.\n\nTeaching assumptions: two threads, atomic reads/writes, and sequential consistency.",
      "notes_text": "Peterson combines interest with a tie-breaker. Do not implement this using ordinary C/C++ shared variables. Proper language atomics and memory ordering are required. The safest teaching translation uses sequentially consistent atomic variables throughout.",
      "media": []
    },
    {
      "slide_num": 38,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nPeterson\u2019s Solution: Both Threads Request Entry\n\n31\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nStep | Thread 0 | Thread 1 | Result\n1 | flag[0] = true | \u2014 | 0 is interested\n2 | \u2014 | flag[1] = true | Both interested\n3 | turn = 1 | \u2014 | 0 gives priority to 1\n4 | \u2014 | turn = 0 | 1 gives priority to 0\n5 | flag[1] && turn == 1 | flag[0] && turn == 0 | 0 enters, 1 waits\n6 | Exits and clears flag[0] | Loop becomes false | 1 can enter\n\nThe last write to turn resolves simultaneous interest.",
      "notes_text": "Keep both flags true while evaluating step 5. The trace picks one possible ordering of the doorway writes.",
      "media": []
    },
    {
      "slide_num": 39,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nPeterson\u2019s Solution: Correctness Reasoning\n\n32\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nProperty | Reason under the stated assumptions\nMutual exclusion | If both flags are true, turn gives priority to only one thread. A later entrant sees the other\u2019s interest before passing.\nProgress | If only one thread wants entry, the other flag is false. If both want entry, turn selects one.\nBounded waiting | After requesting entry, a thread can be overtaken at most once by the other thread before its next opportunity.\n\nThe proof depends on the memory model and on participants continuing to run.",
      "notes_text": "Discuss why mutual-exclusion reasoning must include doorway interleavings, not only the case where both flags were already true. The overtaking bound is a bound on entries, not a real-time deadline.",
      "media": []
    },
    {
      "slide_num": 40,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nLimitations of Software-Only Approaches\n\n33\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nASSUMPTIONS CAN FAIL\n\nCOSTS STILL REMAIN\n\nCompilers can reorder or remove ordinary loads and stores.\nProcessors can expose memory operations in different orders.\nC/C++ volatile does not provide interthread synchronization.\n\nBusy waiting consumes CPU time.\nTwo-thread algorithms do not directly provide a general-purpose lock.\nProduction code usually uses tested synchronization libraries.\n\nA correct abstract algorithm still needs a correct implementation for the language and hardware.",
      "notes_text": "Further reading / technical references:\nhttps://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf\nhttps://docs.kernel.org/core-api/wrappers/memory-barriers.html",
      "media": []
    },
    {
      "slide_num": 41,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nEvaluating the Three Software Attempts\n\n34\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nProtocol | Mutual exclusion | Progress | Bounded waiting\nSeparate test and set | Fails | No valid lock guarantee | No valid lock guarantee\nStrict alternation | Yes | Fails when the other thread is idle | No complete entry guarantee\nPeterson, two threads | Yes | Yes | Yes, under the stated assumptions\n\nA protocol must satisfy all required properties, not just keep two threads out at once.",
      "notes_text": "Strict alternation limits overtaking, but a requester can still wait forever for an uninterested participant. The table avoids treating that limited property as a satisfactory bounded-entry guarantee.",
      "media": []
    },
    {
      "slide_num": 42,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nPeterson\u2019s Waiting Condition \u2013 question\n\n35\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCLASSROOM DISCUSSION\n\nBoth flags are true and turn == 1.\n1. Which thread may enter?\n2. What lets the waiting thread proceed?\n3. Does changing the flags to volatile make ordinary C code correct?\n\nThink individually, compare with a partner, and justify your answer using an execution trace.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 43,
      "slide_text": "3.3  SOFTWARE SYNCHRONIZATION SOLUTIONS\n\nPeterson\u2019s Waiting Condition \u2013 answer\n\n36\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nThread 1 may enter. Thread 0 waits because flag[1] && turn == 1 is true.\nThread 1 clears flag[1] when it exits, so Thread 0\u2019s loop can become false.\nNo. C/C++ volatile does not replace atomic variables and the required memory ordering.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 44,
      "slide_text": "SECTION 3.4\n\nHardware Support for Synchronization\n\nAtomic updates and memory ordering as building blocks\n\n3.4 / 8\n\n37\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Atomic updates and memory ordering as building blocks",
      "media": []
    },
    {
      "slide_num": 45,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nDisabling Interrupts\n\n38\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nLIMITED KERNEL USE\n\nLIMITATIONS\n\nPrivileged kernel code can mask local interrupts briefly.\nThis can protect against certain interrupt-handler interleavings on that CPU.\nThe code must restore the previous interrupt state.\n\nOther cores can continue accessing shared data.\nLong interrupt-off intervals increase interrupt latency.\nUser programs cannot use this as a general lock, and protected code must not block.\n\nLocal interrupt masking alone does not provide mutual exclusion across multiple cores.",
      "notes_text": "On a uniprocessor, the exact guarantee depends on the preemption and interrupt model. Nonmaskable events and other execution contexts require separate treatment. Kernels may combine a spinlock with local interrupt masking.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
      "media": []
    },
    {
      "slide_num": 46,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nAtomic Read\u2013Modify\u2013Write Operations\n\n39\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nAn atomic read\u2013modify\u2013write operation appears indivisible to competing accesses.\nHardware serializes competing atomic updates to the same location.\nTest-and-Set, Compare-and-Swap, and exchange can implement lock protocols.\nAtomicity and memory ordering are distinct properties. A lock needs both.\n\nOne atomic instruction protects one operation. A protocol protects a larger invariant.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf\nhttps://docs.kernel.org/core-api/wrappers/memory-barriers.html",
      "media": []
    },
    {
      "slide_num": 47,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nTest-and-Set\n\n40\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\natomic test_and_set(L):\nold = L\nL = true\nreturn old\n// Acquire\nwhile (test_and_set(L)) { }\ncritical_section()\n// Release\nstore_release(L, false)\n\nThe entire primitive is atomic.\nAn old value of false means this caller acquired the lock.\nAn old value of true means another caller owns it.\nSuccessful acquisition needs acquire ordering.\n\nThe separate test and set have become one indivisible operation.",
      "notes_text": "Language-neutral pseudocode. L starts false. test_and_set must include appropriate acquire semantics for lock acquisition, and unlock uses release semantics. The simple loop provides no FIFO fairness guarantee.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
      "media": []
    },
    {
      "slide_num": 48,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nCompare-and-Swap (CAS)\n\n41\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\natomic CAS(addr, expected, new):\nold = *addr\nif old == expected:\n*addr = new\nreturn old\n// L initially 0\nwhile (CAS(&L, 0, 1) != 0) { }\ncritical_section()\nstore_release(L, 0)\n\nCAS changes a value only if it matches the expected value.\nThis slide uses the convention \u201creturn the old value.\u201d\nSuccessful CAS acquires the lock when old == 0.\nReal APIs may return a Boolean and update an expected-value argument.\n\nAlways check the return-value convention and memory-order contract of the actual API.",
      "notes_text": "Pseudocode CAS must be atomic and have acquire semantics on successful lock acquisition. C/C++ compare_exchange differs from this old-value-return convention. Weak compare_exchange can fail spuriously.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf\nhttps://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf",
      "media": []
    },
    {
      "slide_num": 49,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nAtomic Swap / Exchange\n\n42\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\n// Shared: locked = false\n// Local: key\nkey = true;\nwhile (key) {\natomic_swap(locked, key);\n}\ncritical_section();\nstore_release(locked, false);\n\natomic_swap exchanges the two values as one atomic operation.\nIf locked was false, key becomes false and this thread owns the lock.\nIf locked was true, key stays true and the loop continues.\nExchange-based APIs often return the previous shared value.\n\nThe same idea appears as an exchange instruction or an atomic exchange API.",
      "notes_text": "Classical pseudocode has a shared lock and a thread-local key. Appropriate acquire semantics are required. Real hardware normally exchanges a register value with memory, rather than arbitrary pairs of memory locations.",
      "media": []
    },
    {
      "slide_num": 50,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nMemory Barriers and Ordering\n\n43\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nWHY ORDERING MATTERS\n\nACQUIRE AND RELEASE\n\nA writer can update data and then announce that it is ready.\nWithout a synchronization relation, another thread cannot assume it observes those writes in that order.\nA memory barrier enforces specified ordering constraints on memory accesses.\n\nRelease publishes preceding writes through a synchronization operation.\nA matching acquire makes those writes visible to later reads.\nCorrect library locks supply the needed ordering for protected data.\n\nA fence is not a substitute for mutual exclusion, and a compiler barrier alone is not a hardware fence.",
      "notes_text": "Further reading / technical references:\nhttps://docs.kernel.org/core-api/wrappers/memory-barriers.html\nhttps://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf",
      "media": []
    },
    {
      "slide_num": 51,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nPublishing Data with Release and Acquire\n\n44\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC++-style pseudocode\n\nWRITER\n\nREADER\n\n// One publication only\n// ready is an atomic Boolean\n// ready is initially false\ndata = 42;\nready.store(true, release);\n\nwhile (!ready.load(acquire)) { }\n// If the load observes true:\nuse(data);\n\nThe acquire that observes the release establishes visibility of data = 42.",
      "notes_text": "data may be an ordinary variable because its one write happens-before the read through the ready atomic. There must be no later unsynchronized modification. A reusable publication protocol needs additional coordination. This is not a recommendation to spin for long waits.\nFurther reading / technical references:\nhttps://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf\nhttps://docs.kernel.org/core-api/wrappers/memory-barriers.html",
      "media": []
    },
    {
      "slide_num": 52,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nSpinlocks\n\n45\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nWHEN SPINNING CAN HELP\n\nWHEN SPINNING HURTS\n\nThe expected wait is very short.\nThe owner can run on another core and release promptly.\nBlocking and waking would cost more than brief spinning.\n\nThe owner is descheduled or cannot run.\nThe critical section performs slow I/O or blocking work.\nMany threads repeatedly update one cache line.\n\nSpinlock critical sections must stay short. Simple spinlocks do not guarantee bounded waiting.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
      "media": []
    },
    {
      "slide_num": 53,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nHardware Primitives versus Complete Locks\n\n46\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nMechanism | Provides | Does not automatically provide\nAtomic Test-and-Set / exchange | Indivisible read and update | Fair queueing or low contention\nCompare-and-Swap | Conditional atomic update | Correct multi-variable invariants\nAcquire / release ordering | Required visibility ordering | Mutual exclusion by itself\nSpinlock protocol | Exclusive access while held | Bounded waiting or efficient long waits\n\nCorrect lock design combines an atomic ownership protocol with ordering and a waiting policy.",
      "notes_text": "Correct lock design combines an atomic ownership protocol with ordering and a waiting policy.",
      "media": []
    },
    {
      "slide_num": 54,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nTwo Test-and-Set Calls \u2013 question\n\n47\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCLASSROOM DISCUSSION\n\nThe lock initially contains false. Two threads call atomic test_and_set on it.\n1. Can both calls return false?\n2. Can the winning thread be preempted?\n3. Does the losing thread have a bounded waiting guarantee?\n\nThink individually, compare with a partner, and justify your answer using an execution trace.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 55,
      "slide_text": "3.4  HARDWARE SUPPORT FOR SYNCHRONIZATION\n\nTwo Test-and-Set Calls \u2013 answer\n\n48\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nNo. Without an intervening unlock, only the first atomic call can observe false.\nYes. Atomic acquisition does not make the entire critical section immune to preemption.\nNo. This simple spinlock has no rule that limits how often others can overtake it.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 56,
      "slide_text": "SECTION 3.5\n\nMutexes and Semaphores\n\nExclusive ownership, resource permits, and blocking waits\n\n3.5 / 8\n\n49\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Exclusive ownership, resource permits, and blocking waits",
      "media": []
    },
    {
      "slide_num": 57,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nMutex Locks\n\n50\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nmutex m;\nlock(m);\n// Shared invariant is protected\nupdate_shared_state();\nunlock(m);\n\nOnly one thread owns the mutex at a time.\nThe owner releases it after the protected operation.\nAll accesses that can conflict must obey the same locking rule.\nUse cleanup paths or scope-based guards so errors do not leave the lock held.\n\nA lock protects a rule about data. It does not automatically find every access to that data.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
      "media": []
    },
    {
      "slide_num": 58,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nPthreads: Protecting a Shared Counter\n\n51\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC / POSIX Threads fragment\n\npthread_mutex_t m =\nPTHREAD_MUTEX_INITIALIZER;\nlong counter = 0;\nvoid *worker(void *arg) {\nfor (int k = 0; k < 100000; ++k) {\npthread_mutex_lock(&m);\n++counter;\npthread_mutex_unlock(&m);\n}\nreturn NULL;\n}\n\nCreate two workers, then join both.\nThe expected final count is 200000.\nThe critical section includes the full increment.\nFragment omits headers, main, and error checks.\n\nThe final read occurs after both successful pthread_join calls.",
      "notes_text": "Required header is pthread.h. Production code must inspect Pthreads return values. Each worker holds the mutex for each increment to make the teaching point; for throughput, a per-thread subtotal plus a final aggregation can be better. pthread_join synchronizes with thread completion.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
      "media": []
    },
    {
      "slide_num": 59,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nMutex, Binary Semaphore, and Counting Semaphore\n\n52\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nPrimitive | Initial state / range | Typical use | Ownership\nMutex | Unlocked or locked | Protect shared state | The locking thread owns it\nBinary semaphore | 0 or 1 in a binary protocol | One permit or an event | No owner requirement\nCounting semaphore | Nonnegative available permits | Pool of N equivalent resources | No owner requirement\n\nA semaphore initialized to 1 can enforce exclusion, but its ownership rules differ from a mutex.",
      "notes_text": "Some APIs expose only general counting semaphores. Initializing one to 1 does not prevent accidental extra posts from raising its count above 1. POSIX semaphores have an implementation-defined maximum count.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 60,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nSemaphore wait() and signal()\n\n53\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nAbstract semaphore semantics\n\nwait(S) / P / down\n\nsignal(S) / V / up\n\natomically:\nif a permit is available:\nconsume one permit\nreturn\nelse:\nwait until a permit\ncan be acquired\n\natomically:\nmake one permit available\nor hand it to a waiter\n// A signal before a wait\n// is remembered as a permit.\n\nEach successful wait consumes one permit. Each signal returns or supplies one permit.",
      "notes_text": "wait and signal are conventional textbook names, not all languages\u2019 literal API names. POSIX uses sem_wait and sem_post. Scheduling order depends on implementation and policy; do not assume FIFO.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 61,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nCounting Semaphore: Three Resource Permits\n\n54\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nEvent | Available permits | What happens\nInitialize S = 3 | 3 | Three resources available\nA calls wait(S) | 2 | A receives one resource\nB calls wait(S), then C calls wait(S) | 0 | All resources in use\nD calls wait(S) | 0 | D blocks\nB returns a resource with signal(S) | 0 after handoff | D receives the released permit\n\nThe count tracks available permits, not the identity of the resource a thread receives.",
      "notes_text": "This trace uses a nonnegative permit-count convention and direct handoff to a waiting thread. Some textbook implementations use a negative internal count to represent waiters. Those are alternative implementation conventions.",
      "media": []
    },
    {
      "slide_num": 62,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nBlocking versus Busy Waiting\n\n55\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nBUSY WAITING\n\nBLOCKING\n\nRepeatedly checks or retries while remaining runnable.\nConsumes CPU time during the wait.\nCan be useful for a very short delay.\n\nPlaces the thread in a waiting state.\nAllows the CPU to execute other runnable work.\nPays sleep, wakeup, and scheduling overhead.\n\nReal mutex implementations may use a fast user-space path and block only after contention.",
      "notes_text": "An adaptive mutex can spin briefly before sleeping. Waking makes a thread eligible to run; it does not guarantee immediate execution.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
      "media": []
    },
    {
      "slide_num": 63,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nA Blocking Semaphore Implementation\n\n56\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nConceptual OS pseudocode\n\nwait(S)\n\nsignal(S)\n\nlock(S.internal)\nif S.permits > 0:\nS.permits -= 1\nunlock(S.internal)\nelse:\nenqueue(S.queue, self)\npark_and_unlock(S.internal)\n// Resume with reserved permit\n\nlock(S.internal)\nif queue_empty(S.queue):\nS.permits += 1\nelse:\nt = dequeue(S.queue)\nreserve_permit_for(t)\nwake(t)\nunlock(S.internal)\n\nQueueing and sleeping must coordinate atomically with signaling to prevent a lost wakeup.",
      "notes_text": "park_and_unlock is an internal primitive that prevents a wakeup from being lost between enqueue and sleep. It releases the internal lock and returns only after this thread receives its reserved permit. Implementations may use wake tokens or an equivalent mechanism. Ordinary unlock followed by sleep is insufficient. This model does not assume application-level spurious returns.",
      "media": []
    },
    {
      "slide_num": 64,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nA Semaphore Can Enforce Event Ordering\n\n57\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nTHREAD A\n\nTHREAD B\n\n// done initially 0\nprepare_result();\nsignal(done);\n\nwait(done);\nconsume_result();\n\nThread B continues only after a permit records completion of prepare_result().",
      "notes_text": "The synchronization primitive must have the required publication/visibility semantics. This is a one-event example. With repeated production, one must additionally coordinate buffer ownership and prevent overwrite.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 65,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nCommon Semaphore Errors\n\n58\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nMistake | Possible result | Repair\nWrong initial count | Excess access or no progress | Set the count to actual permits\nMissing signal | A permit leaks | Release on every exit after acquisition\nExtra signal | Capacity can be exceeded | Balance acquisitions and releases\nWait while holding a needed mutex | Circular waiting | Wait for availability before taking that mutex\nAssuming FIFO wakeups | Starvation may occur | Use an explicit fairness policy\n\nCorrect initialization and operation ordering are part of the algorithm.",
      "notes_text": "Correct initialization and operation ordering are part of the algorithm.",
      "media": []
    },
    {
      "slide_num": 66,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nSemaphore Initialization \u2013 question\n\n59\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCLASSROOM DISCUSSION\n\nChoose the initial value for each semaphore:\n1. Mutual exclusion for one critical section\n2. A pool with four available connections\n3. \u201cWait until initialization has finished\u201d\n\nThink individually, compare with a partner, and justify your answer using an execution trace.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 67,
      "slide_text": "3.5  MUTEXES AND SEMAPHORES\n\nSemaphore Initialization \u2013 answer\n\n60\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n1 permit for mutual exclusion, with balanced wait and signal operations.\n4 permits for four available connections.\n0 permits for the completion event. The initializer signals after publishing the result.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 68,
      "slide_text": "SECTION 3.6\n\nMonitors and Condition Variables\n\nKeeping shared state, its lock, and its waiting rules together\n\n3.6 / 8\n\n61\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Keeping shared state, its lock, and its waiting rules together",
      "media": []
    },
    {
      "slide_num": 69,
      "slide_text": "3.6  MONITORS AND CONDITION VARIABLES\n\nThe Monitor Abstraction\n\n62\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nA monitor groups shared state with the operations that access it.\nOnly one thread executes protected monitor code at a time.\nCondition variables let a thread wait for a state predicate.\nA language runtime or a library pattern manages entry and exit locking.\n\nEncapsulation makes the synchronization rule easier to apply consistently.",
      "notes_text": "A condition predicate is a Boolean statement about shared state, such as count > 0. The condition variable itself does not contain that Boolean state. Java synchronized methods are one monitor-style mechanism; Pthreads can implement the pattern using a mutex and condition variables.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~bart/537/lecturenotes/s8.html",
      "media": []
    },
    {
      "slide_num": 70,
      "slide_text": "3.6  MONITORS AND CONDITION VARIABLES\n\nWaiting for a Condition\n\n63\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nlock(m);\nwhile (!predicate()) {\nwait(cv, m);\n}\nuse_protected_state();\nunlock(m);\n\nThe caller holds m while checking the predicate.\nwait atomically releases m and begins waiting.\nBefore wait returns, the thread reacquires m.\nThe loop checks whether the condition is still true.\n\nThe state predicate and the wait must use the same synchronization discipline.",
      "notes_text": "POSIX example: pthread_cond_wait(&cv, &m). A real implementation must check errors. Keep the predicate protected by the associated mutex. Returned wait does not imply that the predicate is true.\nFurther reading / technical references:\nhttps://pubs.opengroup.org/onlinepubs/9799919799/functions/pthread_cond_clockwait.html\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf",
      "media": []
    },
    {
      "slide_num": 71,
      "slide_text": "3.6  MONITORS AND CONDITION VARIABLES\n\nCondition-Variable Operations\n\n64\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nOperation | Effect | What to remember\nwait(cv, m) | Releases m, waits, then reacquires m before returning | The caller must check the predicate again\nsignal(cv) | Wakes one eligible waiter, if one exists | The signal is not stored for a future waiter\nbroadcast(cv) | Wakes all current waiters | They compete to reacquire the mutex\n\nFor a simple reliable pattern, change the predicate and signal while holding its mutex.",
      "notes_text": "The exact number awakened by POSIX signal can occasionally exceed one because of implementation effects. The practical contract is to avoid relying on exactly one successful consumer. A broadcast does not let all threads hold the mutex simultaneously.\nFurther reading / technical references:\nhttps://pubs.opengroup.org/onlinepubs/9799919799/functions/pthread_cond_clockwait.html",
      "media": []
    },
    {
      "slide_num": 72,
      "slide_text": "3.6  MONITORS AND CONDITION VARIABLES\n\nMesa versus Hoare Monitor Behavior\n\n65\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nQuestion | Mesa-style behavior | Hoare-style behavior\nAfter signal | Signaler continues in the monitor | Control transfers immediately to a waiter\nSignaled thread | Becomes eligible and later reacquires the lock | Runs with the monitor lock immediately\nPredicate at resumption | May have changed before the waiter runs | Handoff preserves the signaled condition at that point\nUsual programming rule | Recheck the predicate in a while loop | Reason from the stronger handoff semantics\n\nCommon condition-variable APIs use Mesa-like behavior. A wakeup is permission to recheck.",
      "notes_text": "Pure Hoare monitor semantics park the signaler while the awakened waiter runs, then later allow the signaler to continue. Modern APIs may also allow spurious wakeups. While loops remain the safe default for practical Mesa-style condition-variable programming.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~bart/537/lecturenotes/s8.html\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf",
      "media": []
    },
    {
      "slide_num": 73,
      "slide_text": "3.6  MONITORS AND CONDITION VARIABLES\n\nWhy a while Loop Is Necessary\n\n66\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nStep | Action | Buffer count\n1 | Consumer C1 waits for count > 0 | 0\n2 | Producer adds an item and signals C1 | 1\n3 | Another consumer C2 acquires the mutex first and removes it | 0\n4 | C1 reacquires the mutex and rechecks count > 0 | 0\n5 | C1 waits again instead of removing from an empty buffer | 0\n\nEven without a spurious wakeup, another thread can consume the condition first.",
      "notes_text": "Assume Mesa behavior and no fairness restriction that prevents C2 from acquiring first. The while loop addresses both changed state and spurious wakeups.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf",
      "media": []
    },
    {
      "slide_num": 74,
      "slide_text": "3.6  MONITORS AND CONDITION VARIABLES\n\nCondition Variable versus Semaphore\n\n67\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nAspect | Condition variable | Semaphore\nPersistent state | Predicate lives in shared data | Permit count lives in the semaphore\nSignal with no waiter | No stored notification | Increases the available permit count\nWaiting and a mutex | Atomically releases, then reacquires it | Does not release an unrelated mutex\nTypical purpose | Wait for a protected state condition | Count resources or record events\n\nThe similar operation names hide different semantics.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 75,
      "slide_text": "3.6  MONITORS AND CONDITION VARIABLES\n\nLost Notification or Safe Wait? \u2013 question\n\n68\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCLASSROOM DISCUSSION\n\nThe producer sets ready = true while holding m and signals cv before the consumer arrives.\nThe consumer later locks m and executes:\nwhile (!ready) wait(cv, m);\nWill it wait forever because it missed the signal?\n\nThink individually, compare with a partner, and justify your answer using an execution trace.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 76,
      "slide_text": "3.6  MONITORS AND CONDITION VARIABLES\n\nLost Notification or Safe Wait? \u2013 answer\n\n69\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nNo. It observes ready == true under the mutex and skips wait.\nThe shared predicate remembers that the work is ready.\nA consumer that waits unconditionally could miss the earlier signal and block indefinitely.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 77,
      "slide_text": "SECTION 3.7\n\nClassical Synchronization Problems\n\nApplying safety and liveness requirements to complete protocols\n\n3.7 / 8\n\n70\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Applying safety and liveness requirements to complete protocols",
      "media": []
    },
    {
      "slide_num": 78,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nClassical Problems and Their Constraints\n\n71\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nProblem | Shared resource | Main coordination question\nProducer\u2013Consumer | Buffer of items | When may an item be inserted or removed?\nReaders\u2013Writers | Shared data set | Which accesses may overlap safely?\nDining Philosophers | Pairs of neighboring utensils | How can multiple-resource acquisition progress?\nSleeping Barber | One server and a finite waiting room | How do arrivals, capacity, and service interact?\n\nFor each problem, define the invariant before choosing the primitive.",
      "notes_text": "For each problem, define the invariant before choosing the primitive.",
      "media": []
    },
    {
      "slide_num": 79,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nThe Bounded-Buffer Problem\n\n72\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nProducers insert items. Consumers remove items.\nA buffer of capacity N may contain between 0 and N items.\nA producer must wait when the buffer is full.\nA consumer must wait when the buffer is empty.\nOnly one thread at a time updates shared buffer bookkeeping.\n\nProducer\u2013Consumer describes the roles. A bounded buffer adds a finite capacity.",
      "notes_text": "Useful invariants: 0 <= count <= N, each produced item is removed at most once, and queue head/tail remain valid. Assume N > 0 and operations eventually finish.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 80,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nBounded Buffer with Semaphores\n\n73\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nPRODUCER\n\nCONSUMER\n\nitem = produce()\nwait(empty)\nwait(mutex)\ninsert(item)\nsignal(mutex)\nsignal(full)\n\nwait(full)\nwait(mutex)\nitem = remove()\nsignal(mutex)\nsignal(empty)\nconsume(item)\n\nInitialize empty = N, full = 0, and mutex = 1. Wait for availability before taking mutex.",
      "notes_text": "Produce and consume execute outside the buffer critical section. All operations are assumed to complete successfully. A real program must handle cancellation and errors without leaking permits. mutex is a binary semaphore in this classical version, although a mutex lock can replace it.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 81,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nBounded Buffer: Capacity Two\n\n74\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nEvent | empty | full | Buffer\nInitial state | 2 | 0 | [ ]\nProducer completes insertion of A | 1 | 1 | [A]\nProducer completes insertion of B | 0 | 2 | [A, B]\nProducer blocks while reserving space for C | 0 | 2 | [A, B]\nConsumer completes removal of A | 0 after handoff | 1 | [B]\nProducer completes insertion of C | 0 | 2 | [B, C]\n\nA permit may be reserved before the corresponding buffer operation finishes.",
      "notes_text": "After the consumer signals empty, its space permit transfers to the blocked producer, so the available empty count remains 0 in the shown handoff. In that interval empty + full need not equal N. At stable boundaries without reservations, it does. Counts alone cannot describe all in-flight operations.",
      "media": []
    },
    {
      "slide_num": 82,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nA Bounded-Buffer Ordering Bug\n\n75\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\n// Incorrect consumer order\nwait(mutex);\nwait(full);\nitem = remove();\nsignal(mutex);\nsignal(empty);\n\nAssume the buffer is empty.\nThe consumer holds mutex and blocks on full.\nA producer needs mutex to insert an item and signal full.\nNeither can complete the step needed by the other.\n\nRepair: wait(full) before wait(mutex). Detailed deadlock analysis follows in Chapter 4.",
      "notes_text": "Repair: wait(full) before wait(mutex). Detailed deadlock analysis follows in Chapter 4.",
      "media": []
    },
    {
      "slide_num": 83,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nBounded Buffer with Monitor Conditions\n\n76\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nput(item)\n\nget()\n\nlock(m)\nwhile count == N:\nwait(not_full, m)\ninsert(item)\ncount += 1\nsignal(not_empty)\nunlock(m)\n\nlock(m)\nwhile count == 0:\nwait(not_empty, m)\nitem = remove()\ncount -= 1\nsignal(not_full)\nunlock(m)\nreturn item\n\nOne mutex protects count and the buffer. Two conditions describe different reasons to wait.",
      "notes_text": "Pseudocode defines insert and remove as buffer index/data operations that do not themselves modify count. This avoids double-counting. Both functions reacquire m after every wait and reevaluate their predicates. Assumes homogeneous producer/consumer wait predicates.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf",
      "media": []
    },
    {
      "slide_num": 84,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nThe Readers\u2013Writers Problem\n\n77\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nACCESS RULES\n\nPOLICY CHOICES\n\nMultiple readers may access the data at the same time.\nA writer requires exclusive access.\nNo reader may overlap a writer on the protected data.\n\nReader preference can delay writers indefinitely.\nWriter preference can delay readers indefinitely.\nA fair admission policy controls overtaking for both groups.\n\nAn exclusion rule alone does not define who gets served next.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 85,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nReaders\u2013Writers: Reader-Preference Protocol\n\n78\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nREADER\n\nWRITER\n\nwait(rmutex)\nreaders += 1\nif readers == 1: wait(room)\nsignal(rmutex)\nread_data()\nwait(rmutex)\nreaders -= 1\nif readers == 0: signal(room)\nsignal(rmutex)\n\nwait(room)\nwrite_data()\nsignal(room)\n// Initial values\nreaders = 0\nrmutex = 1\nroom = 1\n\nThe first reader acquires room. The last reader releases it.",
      "notes_text": "room is a semaphore because the first and last readers can be different threads. Replacing it with an owner-based mutex would be incorrect. rmutex protects readers. This solution permits writer starvation. It deliberately waits(room) while holding rmutex so that later readers cannot bypass the first reader before room is acquired; writers do not need rmutex.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 86,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nReaders\u2013Writers Fairness\n\n79\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nUnder reader preference, new readers can join while a writer waits.\nAn endless stream of readers can keep readers > 0 indefinitely.\nA turnstile or ordered admission queue can prevent newcomers from bypassing a waiting writer.\nStarvation freedom still depends on the admission primitive and scheduling assumptions.\n\nA readers\u2013writers lock is useful only when its policy and overhead match the workload.",
      "notes_text": "Do not claim every semaphore-based turnstile guarantees fairness. FIFO or another explicit bounded-overtaking policy is needed for a bounded-waiting argument. Reader-heavy does not automatically mean a readers\u2013writers lock outperforms a mutex.",
      "media": []
    },
    {
      "slide_num": 87,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nThe Dining Philosophers Problem\n\n80\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nNaive C-like pseudocode for philosopher i\n\nwhile (true) {\nthink();\nwait(F[i]);\nwait(F[(i + 1) % 5]);\neat();\nsignal(F[(i + 1) % 5]);\nsignal(F[i]);\n}\n\nFive philosophers alternate between thinking and eating.\nFive utensils sit between neighboring philosophers.\nEach philosopher needs both adjacent utensils to eat.\nEach utensil is a semaphore initialized to 1.\n\nIf everyone picks up one utensil first, all five can become stuck waiting for the second.",
      "notes_text": "Philosopher Pi requires Fi and F(i+1 mod 5). This intentionally naive protocol demonstrates a deadlock risk. The next slide traces the all-hold-one state.\nFurther reading: https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 88,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nDining Philosophers: A Deadlock Trace\n\n81\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nPhilosopher | Holds | Waits for\nP0 | F0 | F1\nP1 | F1 | F2\nP2 | F2 | F3\nP3 | F3 | F4\nP4 | F4 | F0\n\nEach philosopher holds one utensil and waits for the next. No one can eat or release.",
      "notes_text": "Five philosophers sit around a table. Philosopher Pi requires Fi and F(i+1 mod 5). Each utensil has one permit. The trace assumes all pick up Fi first and keep it while waiting for the second. This table records the exact resource dependency cycle.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
      "media": []
    },
    {
      "slide_num": 89,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nDining Philosophers: Ways to Avoid This Deadlock\n\n82\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nApproach | Rule | Remaining concern\nGlobal resource order | Always acquire the lower-numbered utensil first | Fair access is still needed\nLimit admission | At most four philosophers try to acquire utensils at once | The admission semaphore may be unfair\nCentral waiter / monitor | Grant both utensils together when available | The waiter needs a starvation policy\n\nAvoiding deadlock does not automatically prevent starvation.",
      "notes_text": "Assume each admitted philosopher continues to execute and releases both utensils after a finite meal. N\u22121 admission for N philosophers breaks the all-hold-one circular configuration. Full prevention/avoidance theory is intentionally left for Chapter 4.",
      "media": []
    },
    {
      "slide_num": 90,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nThe Sleeping Barber Problem\n\n83\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nOne barber serves one customer at a time.\nThe shop has W waiting chairs in addition to the service chair.\nAn arriving customer joins the queue if a waiting chair is available, otherwise leaves.\nThe barber sleeps when the queue is empty and wakes when work arrives.\nA shared queue and per-customer handshakes prevent lost or mismatched service.\n\nSpecify capacity, service order, and completion notification separately.",
      "notes_text": "This teaching model assumes W >= 1 and every customer first joins the waiting queue. Dequeueing frees a waiting chair. A direct-to-service-chair optimization can be added but is not needed for the synchronization lesson.",
      "media": []
    },
    {
      "slide_num": 91,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nSleeping Barber: Customer Protocol\n\n84\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nConceptual pseudocode, W \u2265 1\n\nlock(m)\nif queue.size == W:\nunlock(m)\nleave()\nreturn\nenqueue(queue, c)\nunlock(m)\nsignal(customers)\nwait(c.called)\nsit_in_service_chair()\nsignal(c.seated)\nwait(c.done)\nleave_service_chair()\nsignal(c.left)\n\nJoin the FIFO queue only when a waiting chair is available.\nEach customer has private handshake semaphores.\nWait for service completion, then confirm that the chair is free.\n\ncustomers and each customer\u2019s called, seated, done, and left semaphores start at 0.",
      "notes_text": "m starts unlocked. The queue is FIFO, and each customer owns four distinct semaphores. Assume customers remain until service completion, semaphores do not spuriously return, and operations succeed. A token cannot be consumed by the wrong customer because the service handshakes are per customer. Cancellation, shop closure, and abandoned customers need additional protocol. The left handshake ensures that the current customer vacates the service chair before the barber admits the next customer.",
      "media": []
    },
    {
      "slide_num": 92,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nSleeping Barber: Barber Protocol\n\n85\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nConceptual pseudocode\n\nwhile true:\nwait(customers)\nlock(m)\nc = dequeue(queue)\nunlock(m)\nsignal(c.called)\nwait(c.seated)\ncut_hair(c)\nsignal(c.done)\nwait(c.left)\n\nWait for an arrival token before accessing the queue.\nRemove one customer while holding the queue mutex.\nWait for that customer to sit before starting service.\nWait for the service chair to become free before admitting the next customer.\n\nA FIFO queue plus per-customer handshakes keeps service in order.",
      "notes_text": "m starts unlocked. The queue is FIFO, and each customer owns four distinct semaphores. Assume customers remain until service completion, semaphores do not spuriously return, and operations succeed. A token cannot be consumed by the wrong customer because the service handshakes are per customer. Cancellation, shop closure, and abandoned customers need additional protocol. The left handshake ensures that the current customer vacates the service chair before the barber admits the next customer.",
      "media": []
    },
    {
      "slide_num": 93,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nCorrectness and Fairness Checklist\n\n86\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nQuestion | What a solution must establish\nSafety | Capacity, exclusive access, and data invariants always hold\nProgress | Enabled work can eventually proceed\nStarvation freedom | Every admitted request eventually receives service\nBounded waiting | A defined bound limits overtaking\nAssumptions | Scheduling, finite operations, cancellation, and failures are explicit\n\nTest traces can reveal a flaw. A correctness argument must cover all allowed executions.",
      "notes_text": "Test traces can reveal a flaw. A correctness argument must cover all allowed executions.",
      "media": []
    },
    {
      "slide_num": 94,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nBounded Buffer: Find the Bug \u2013 question\n\n87\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCLASSROOM DISCUSSION\n\nCapacity N = 4. A proposed solution initializes:\nempty = 4, full = 1, mutex = 1\nThe actual buffer is empty. What can go wrong before any producer runs?\n\nThink individually, compare with a partner, and justify your answer using an execution trace.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 95,
      "slide_text": "3.7  CLASSICAL SYNCHRONIZATION PROBLEMS\n\nBounded Buffer: Find the Bug \u2013 answer\n\n88\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nA consumer can successfully wait(full) even though no item exists.\nThe consumer can enter the buffer operation and attempt to remove nonexistent data.\nInitialize full = 0. Semaphore counts must represent actual resources or events.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 96,
      "slide_text": "SECTION 3.8\n\nPractical Concurrent Programming\n\nChoosing synchronization rules that remain correct and scale\n\n3.8 / 8\n\n89\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026",
      "notes_text": "Choosing synchronization rules that remain correct and scale",
      "media": []
    },
    {
      "slide_num": 97,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nThread-Safe Data Structures\n\n90\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nA DOCUMENTED CONTRACT\n\nCOMPOUND OPERATIONS\n\nDefine which methods may run concurrently.\nProtect compound invariants such as head, tail, and count together.\nDocument iteration behavior and object lifetime.\n\nif (!queue.empty()) queue.pop() contains a gap.\nAnother thread can remove the last item during that gap.\nPrefer one try_pop operation that checks and removes atomically.\n\nThread-safe methods do not make arbitrary combinations of those methods atomic.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks-usage.pdf",
      "media": []
    },
    {
      "slide_num": 98,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nConsistent Lock Ordering\n\n91\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nINCONSISTENT ORDER\n\nONE GLOBAL ORDER\n\n// Thread A\nlock(account_1)\nlock(account_2)\n// Thread B\nlock(account_2)\nlock(account_1)\n\n// Both threads\nfirst  = lower_unique_id(a, b)\nsecond = higher_unique_id(a, b)\nlock(first)\nlock(second)\ntransfer()\nunlock(second)\nunlock(first)\n\nUse the same stable order on every path that acquires these locks.",
      "notes_text": "This pseudocode assumes distinct account objects with unique stable IDs and a shared locking policy. A transfer to the same account needs special handling so the same nonrecursive mutex is not acquired twice. Lock ordering prevents cycles among these locks but does not by itself guarantee fairness or eliminate unrelated deadlocks.",
      "media": []
    },
    {
      "slide_num": 99,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nLock Granularity\n\n92\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nChoice | Benefit | Cost / risk\nCoarse-grained: one lock for a structure | Simple invariant and easier reasoning | Unrelated operations serialize\nFine-grained: a lock per bucket or region | Independent operations can overlap | More locks, ordering rules, and lifetime complexity\nPartitioned ownership: each worker owns its state | Less shared mutable state | Coordination is needed when data crosses partitions\n\nBegin with a correct design. Increase granularity only where measurements show contention.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks-usage.pdf",
      "media": []
    },
    {
      "slide_num": 100,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nAtomic Variables\n\n93\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC++-style pseudocode\n\n// C++-style pseudocode\natomic<long> count = 0;\n// Each worker\ncount.fetch_add(1, relaxed);\n// After joining all workers\nprint(count.load());\n\nfetch_add makes this increment indivisible.\nRelaxed ordering can suffice for an independent count.\nThe joins establish worker completion before the final read.\nAn atomic count does not protect a linked list, queue, or multi-field invariant.\n\nChoose the weakest ordering only when you can justify every required dependency.",
      "notes_text": "The example counts independent events and does not publish associated payload data. Use a range that cannot overflow. Atomics are not necessarily lock-free for every type/platform. Lock-free algorithms also need safe memory reclamation and correct ABA handling where applicable.\nFurther reading / technical references:\nhttps://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf",
      "media": []
    },
    {
      "slide_num": 101,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nThread Pools and Bounded Concurrency\n\n94\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nA pool reuses workers and takes tasks from a synchronized queue.\nA bounded queue requires a policy when full: wait, reject, or apply backpressure.\nCPU-bound and I/O-bound tasks have different worker-count needs.\nShutdown must define whether queued work drains or is canceled.\nWorkers that wait for tasks queued to the same saturated pool can deadlock.\n\nA thread pool manages concurrency. It does not remove races inside the tasks.",
      "notes_text": "Connect to Chapter 2 thread-pool fundamentals. This slide adds queue synchronization, lifecycle, and dependency hazards. Avoid a universal \u201cone thread per core\u201d rule for all workloads.",
      "media": []
    },
    {
      "slide_num": 102,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nDebugging Races with ThreadSanitizer\n\n95\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nExample command on a supported Clang platform\n\nclang -std=c11 -O1 -g \\\n-fsanitize=thread -pthread \\\ncounter.c -o counter_tsan\n./counter_tsan\n\nThreadSanitizer instruments a program to detect data races during execution.\nUse debug symbols to locate the conflicting accesses.\nRead both access stacks and their synchronization context.\nA clean run does not prove that every possible execution is race-free.\n\nDynamic race detectors find executed problems. They cannot replace invariant-based reasoning.",
      "notes_text": "Use on a supported platform and compiler installation. Not every logical race, deadlock, or starvation bug is a data race. Tool overhead changes timing. Official instructions recommend -g and -O1 or higher.\nFurther reading / technical references:\nhttps://clang.llvm.org/docs/ThreadSanitizer.html",
      "media": []
    },
    {
      "slide_num": 103,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nA Practical Debugging Workflow\n\n96\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nWrite the invariant and identify every access to the shared state.\nReduce the failure to a small reproducible case.\nUse barriers or explicit handshakes to exercise a suspicious interleaving.\nRun a race detector and inspect lock order and condition predicates.\nRetest with different thread counts and workloads after repairing the protocol.\n\nsleep() may expose a bug during a test, but it does not repair synchronization.",
      "notes_text": "Logging and debugger breakpoints perturb timing. Preserve enough evidence to identify the conflicting accesses. If a failure disappears after adding a printf, it may still be present.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf\nhttps://clang.llvm.org/docs/ThreadSanitizer.html",
      "media": []
    },
    {
      "slide_num": 104,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nPerformance and Scalability Trade-offs\n\n97\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nIssue | Why performance drops | Possible response\nLock contention | Many threads serialize on one owner | Shorten the protected operation or partition state\nFalse sharing | Independent writable data share a cache line | Separate hot per-thread data when justified\nBlocking overhead | Frequent sleep/wakeup transitions cost time | Batch useful work or reconsider granularity\nExcess workers | Scheduling and cache costs grow | Bound concurrency and measure throughput\n\nCorrectness comes first. Then measure the actual workload before changing the design.",
      "notes_text": "Further reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks-usage.pdf",
      "media": []
    },
    {
      "slide_num": 105,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nAmdahl\u2019s Law: Synchronization Limits Speedup\n\n98\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nLet s be the serial fraction and p the number of processors.\nIdeal speedup is at most 1 / (s + (1 \u2212 s) / p).\nIf s = 0.20 and p = 4, the ideal speedup is 1 / 0.40 = 2.5.\nAs p grows without bound, this example approaches a maximum speedup of 5.\nContention, cache traffic, and scheduling overhead can reduce real speedup further.\n\nAdding cores cannot eliminate the part of the workload that must remain serial.",
      "notes_text": "Illustrative calculation, not a measured benchmark. Assumes fixed work, a constant serial fraction, and ideal parallel execution of the remainder. The serial fraction includes inherently serial work and may include serialized critical sections. Real scaling can change the effective fraction.",
      "media": []
    },
    {
      "slide_num": 106,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nChoosing a Synchronization Mechanism\n\n99\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n[TABLE]\nNeed | Common starting point | Key question\nProtect a shared invariant | Mutex / monitor | Do all conflicting accesses follow it?\nLimit concurrent resource users | Counting semaphore | Does each permit represent a resource?\nWait for a state predicate | Condition variable with mutex | Is the predicate checked in a while loop?\nUpdate one independent value | Atomic operation | What ordering is actually required?\nVery short kernel-level wait | Spinlock where appropriate | Can the owner run and release promptly?\n\nChoose based on the required guarantee, then consider cost and fairness.",
      "notes_text": "Choose based on the required guarantee, then consider cost and fairness.",
      "media": []
    },
    {
      "slide_num": 107,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nCode Review Activity: A Flawed Queue\n\n100\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nlock(m);\nif (queue.empty()) {\nwait(not_empty, m);\n}\nitem = queue.pop();\nunlock(m);\n\nFind an interleaving that makes pop unsafe.\nIdentify the predicate and its protecting mutex.\nRepair the code and explain the change.\nIf using AI, keep the prompt log and verify every proposed fix.\n\nA plausible explanation is not evidence that a concurrent program is correct.",
      "notes_text": "Activity aligned with the AI review-and-debug approach in the supplied course plan. Students should provide a concrete counterexample and a correctness explanation, not just a code edit.",
      "media": []
    },
    {
      "slide_num": 108,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nCode Review Activity: Corrected Queue\n\n101\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nC-like pseudocode\n\nlock(m);\nwhile (queue.empty()) {\nwait(not_empty, m);\n}\nitem = queue.pop();\nunlock(m);\n\nAnother consumer may take the item before this waiter reacquires m.\nA spurious wakeup may occur even without a new item.\nThe while loop rechecks queue.empty() under the mutex.\nProducers must use the same mutex and signal after adding work.\n\nThe predicate loop preserves the invariant across every return from wait.",
      "notes_text": "In a bounded queue, pop should also signal not_full. This review example uses an unbounded work queue, so only not_empty appears.\nFurther reading / technical references:\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf",
      "media": []
    },
    {
      "slide_num": 109,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nChapter Review \u2013 question\n\n102\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nCLASSROOM DISCUSSION\n\n1. Can mutual exclusion hold while a thread starves?\n2. Does a condition signal store a future permit?\n3. Does an atomic variable make a multi-step transaction atomic?\n4. Does deadlock freedom imply fairness?\n\nThink individually, compare with a partner, and justify your answer using an execution trace.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 110,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nChapter Review \u2013 answer\n\n103\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\n1. Yes. Safety alone does not guarantee that every thread eventually enters.\n2. No. A condition signal has no stored permit. The shared predicate records state.\n3. No. The entire invariant needs an appropriate atomic operation or protocol.\n4. No. A system can avoid deadlock yet repeatedly bypass one request.",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 111,
      "slide_text": "3.8  PRACTICAL CONCURRENT PROGRAMMING\n\nChapter 3 Summary\n\n104\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nInterleaving and parallelism can expose shared-state bugs.\nA correct protocol needs safety and the required liveness guarantees.\nLocks protect invariants, semaphores count permits, and conditions wait for predicates.\nMemory ordering is part of real synchronization correctness.\nNext: Chapter 4 examines deadlock conditions, prevention, avoidance, detection, and recovery.\n\nThe central question: what must stay true under every allowed execution?",
      "notes_text": "The central question: what must stay true under every allowed execution?",
      "media": []
    },
    {
      "slide_num": 112,
      "slide_text": "CHAPTER 3  REFERENCES\n\nFurther Reading: Concurrency Concepts\n\n105\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nOperating Systems: Three Easy Pieces\n\nRemzi H. Arpaci-Dusseau and Andrea C. Arpaci-Dusseau\nCh. 26\u201332: concurrency, thread APIs, locks, concurrent data structures, condition variables, semaphores, and concurrency bugs.\n\nhttps://pages.cs.wisc.edu/~remzi/OSTEP/\n\nMonitor semantics\n\nUniversity of Wisconsin CS 537 notes, Section 8: Monitors.\n\nhttps://pages.cs.wisc.edu/~bart/537/lecturenotes/s8.html",
      "notes_text": "Examples and traces in this deck are original teaching examples and adaptations of standard synchronization algorithms. Individual slide notes identify relevant technical references. Supplied Chapter 1 and Chapter 2 decks establish the course context and visual style.",
      "media": []
    },
    {
      "slide_num": 113,
      "slide_text": "CHAPTER 3  REFERENCES\n\nFurther Reading: APIs and Memory Ordering\n\n106\n\n\u00a9 Dr. Roya Hosseini | CSC4320, CSC6320 | GSU | Fall 2026\n\nPOSIX condition variables\n\nThe Open Group Base Specifications, Issue 8.\n\nhttps://pubs.opengroup.org/onlinepubs/9799919799/functions/pthread_cond_clockwait.html\n\nC11 memory model and atomics\n\nWG14 N1570, especially 5.1.2.4 and 7.17.\n\nhttps://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf\n\nLinux memory barriers and Clang ThreadSanitizer\n\nKernel documentation and race-detector documentation.\n\nhttps://docs.kernel.org/core-api/wrappers/memory-barriers.html\n\nhttps://clang.llvm.org/docs/ThreadSanitizer.html",
      "notes_text": "",
      "media": []
    },
    {
      "slide_num": 114,
      "slide_text": "End of Chapter 3",
      "notes_text": "",
      "media": []
    }
  ]
};
