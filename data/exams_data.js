// Comprehensive Practice Exams, Flashcards, and Study Guide Data
// Grounded 100% in Dr. Roya Hosseini's Fall 2026 CSC 4320/6320 Slides, Speaker Notes, HW1, and System Call Quiz

window.EXAMS_DATA = [
  {
    id: "exam1",
    title: "Practice Exam 1: Official Paper-Style Mock Exam (Ch 1, Ch 2, & Ch 3.1 Cutoff)",
    subtitle: "Mirrors Dr. Hosseini's exact HW1, In-Class Quiz, and Lecture Exercise format up to the Ch 3 Slide 21 (Oct 7/8) Exam 1 marker.",
    badge: "Core Exam 1 Scope • 100 Pts",
    timeMinutes: 75,
    questions: [
      {
        id: "e1_q1",
        part: "Part A — Multiple Choice",
        type: "mc",
        points: 4,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 6 & 8 ( + Speaker Notes)",
        question: "Which statement best captures the two complementary roles of an operating system and the distinction between mechanism and policy?",
        options: [
          "The OS compiles user source code into firmware (mechanism) and manufactures hardware controllers (policy).",
          "The OS serves as an extended/virtual machine providing clean abstractions, and as a resource manager allocating competing resources; mechanisms determine 'how' operations work while policies decide 'which choice' is made.",
          "The OS executes entirely in user mode to provide abstractions (policy) while hardware controllers enforce scheduling policies (mechanism).",
          "The OS replaces all application software with kernel threads and restricts memory exclusively to a single job at a time."
        ],
        correct: 1,
        explanation: "On Ch 1 Slides 6 & 8, the two complementary views of an OS are (1) an Extended/Virtual Machine (hiding inconvenient hardware details behind abstractions like files, processes, virtual memory, and sockets) and (2) a Resource Manager (tracking ownership, scheduling, and resolving conflicts). Slide 8 explicitly states: 'Mechanism answers \"how?\" Policy answers \"which choice?\"'"
      },
      {
        id: "e1_q2",
        part: "Part A — Multiple Choice",
        type: "mc",
        points: 4,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slide 10",
        question: "Which pairing of historical/modern operating-system categories and their primary optimization goals & defining behaviors is completely accurate?",
        options: [
          "Batch: responsiveness through rapid switching; Time-sharing: throughput by grouping non-interactive jobs.",
          "Multiprogramming: CPU utilization by keeping several jobs in memory; Time-sharing: responsiveness by rapidly switching the CPU among interactive users.",
          "Real-time: maximizing average disk throughput; Embedded: running across thousands of ephemeral cloud servers.",
          "Multiprogramming: guaranteeing hard deadlines; Batch: isolating device drivers in user-space servers."
        ],
        correct: 1,
        explanation: "Ch 1 Slide 10 table: Batch -> Throughput (jobs run in groups with little interaction); Multiprogramming -> CPU utilization (several jobs remain in memory so the CPU can switch when one waits for I/O); Time-sharing -> Responsiveness (CPU rapidly switches among interactive users); Real-time -> Deadline correctness (results must arrive within timing constraints)."
      },
      {
        id: "e1_q3",
        part: "Part A — Multiple Choice",
        type: "mc",
        points: 4,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 35–39",
        question: "While a user program is executing an ordinary arithmetic instruction, a storage controller signals that a disk read has completed. Simultaneously, another thread executes a divide-by-zero instruction, and a third invokes the `syscall` instruction to request `read()`. How are these three events classified?",
        options: [
          "Disk completion: synchronous trap; Divide-by-zero: asynchronous interrupt; `syscall`: synchronous fault.",
          "Disk completion: asynchronous hardware interrupt; Divide-by-zero: synchronous exception/fault; `syscall`: synchronous intentional trap.",
          "All three are asynchronous hardware interrupts because all three enter kernel mode.",
          "Disk completion: asynchronous exception; Divide-by-zero: synchronous trap; `syscall`: asynchronous hardware interrupt."
        ],
        correct: 1,
        explanation: "Ch 1 Slides 35–39: (1) Hardware interrupts originate from external hardware (storage completion, timer, network packet, keyboard) and are asynchronous (not tied to the current instruction). (2) Exceptions/faults originate from the current instruction (divide by zero, invalid opcode, page fault, protection violation) and are synchronous. (3) Traps are intentional software events (system-call request, debugger breakpoint) and are synchronous."
      },
      {
        id: "e1_q4",
        part: "Part A — Multiple Choice",
        type: "mc",
        points: 4,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 42–45 (+ Speaker Notes)",
        question: "Which statement accurately describes the relationship among an API, a C library wrapper, and a system call on Linux?",
        options: [
          "Every API call executes in kernel mode and maps 1-to-1 to a single hardware interrupt.",
          "A system call is more portable across operating systems than a POSIX or Java API.",
          "The application calls the API/wrapper (e.g., `glibc` `read()`), which places the system-call number in `%rax` and arguments in registers, executes `syscall` (trap), and translates negative kernel error returns into `errno` and `-1`; in general, an API call may invoke zero, one, or multiple system calls.",
          "The C library wrapper validates file permissions in user mode so that the CPU never needs to switch to kernel mode."
        ],
        correct: 2,
        explanation: "From Ch 1 Slides 42–45 & Speaker Notes: `read()` in C is a thin library wrapper in `glibc`. It loads arguments into registers and the syscall number into `%rax`, executes `syscall` (trap to kernel mode), and if the kernel returns a negative error code, the wrapper sets `errno` and returns `-1`. Slide 44 notes that an API is application-facing and portable, and one API call may invoke zero, one, or multiple system calls."
      },
      {
        id: "e1_q5",
        part: "Part A — Multiple Choice",
        type: "mc",
        points: 4,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 50–58",
        question: "Compare a Linux modular kernel with a pure microkernel (such as MINIX 3 or QNX) and a hybrid kernel (such as Windows NT or macOS XNU). Which statement is TRUE?",
        options: [
          "In a Linux modular kernel, dynamically loaded device-driver modules execute in isolated user-space address spaces via IPC.",
          "A modular kernel is fundamentally monolithic: modules can be loaded/unloaded dynamically for flexibility, but they execute in kernel space with full privileges—so a buggy module can still crash the entire system.",
          "A microkernel places the file system, networking stack, and device drivers inside kernel space to minimize IPC message passing.",
          "A hybrid kernel removes all services from kernel space and runs the scheduler in user mode."
        ],
        correct: 1,
        explanation: "Ch 1 Slide 55 states explicitly: 'A modular kernel is still fundamentally a monolithic kernel, but parts can be added or removed while the system is running... However, modules still run in kernel space. A faulty module can corrupt kernel memory or crash the entire system. Modular means dynamically extendable—not isolated.' Microkernels (MINIX 3, QNX) keep only scheduling, IPC, and basic memory in the kernel and run file/network/device servers in user space."
      },
      {
        id: "e1_q6",
        part: "Part A — Multiple Choice",
        type: "mc",
        points: 4,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 7, 45–47 (+ Speaker Notes)",
        question: "In a multithreaded process, how are memory regions and execution state divided between the process and its individual threads?",
        options: [
          "Each thread has its own private Text, Data, and Heap segments, while all threads share a single common Stack and Program Counter.",
          "Threads within the same process share the Text (code), Data (initialized globals/statics & BSS uninitialized globals), Heap, and open file descriptors, while each thread has its own private Program Counter, CPU registers, and Stack.",
          "Each thread receives a separate PID and separate virtual address space, communicating only via kernel pipes.",
          "The Heap grows downward from high memory while the Stack grows upward from low memory, and both are private to each thread."
        ],
        correct: 1,
        explanation: "Ch 2 Slide 7 Speaker Notes & Slide 47: Text, Data (initialized data + uninitialized BSS), Heap, and open files are shared by threads in one process. Each thread has its own private Program Counter (PC), CPU registers, and Stack (which grows downward ↓ while Heap grows upward ↑)."
      },
      {
        id: "e1_q7",
        part: "Part A — Multiple Choice",
        type: "mc",
        points: 4,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 27–33 (+ Speaker Notes)",
        question: "A parent process calls `pid_t pid = fork();` and the newly created child immediately calls `execvp(\"ls\", args);`. Which statement about the execution and lifecycle of these processes is accurate?",
        options: [
          "In the child process, `fork()` returns `0` because the child's actual kernel PID is assigned as `0`.",
          "`execvp()` creates a brand-new child process with a new PID and returns `0` to the caller when `ls` finishes.",
          "If `execvp()` succeeds, it replaces the child's code, data, heap, and stack while keeping the same PID, and never returns; if the child later terminates before the parent calls `wait()`/`waitpid()`, the child becomes a zombie process.",
          "If the parent terminates while the child is still running, the child becomes a zombie process and is immediately killed."
        ],
        correct: 2,
        explanation: "Ch 2 Slides 27–33 (+ Speaker Notes): `pid == 0` only tells the code it is executing in the child (its actual PID from `getpid()` is non-zero). `execvp()` replaces the process image in-place without changing the PID and never returns if successful. If a child terminates before its parent calls `wait()`, it becomes a zombie (dead but uncollected exit status). If the parent terminates first while the child is still alive, the child is an orphan and is reparented to PID 1 (`init`/`systemd`)."
      },
      {
        id: "e1_q8",
        part: "Part A — Multiple Choice",
        type: "mc",
        points: 4,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 6–20 (Section 3.1 Exam 1 Scope)",
        question: "Two threads $A$ and $B$ in the same process run on a single-core processor and each execute `r = counter; r = r + 1; counter = r;` where `counter` is initially `10` and `r` is a private thread register. Which statement is TRUE?",
        options: [
          "Because there is only one CPU core, the threads cannot be concurrent and a race condition is impossible.",
          "The threads are concurrent (via interleaving) but not executing CPU instructions in parallel; a context switch after both read `10` can cause a lost update resulting in a final value of `11` instead of `12`.",
          "The threads are executing CPU instructions in parallel on the single core, and the final value is guaranteed to be `12`.",
          "Protecting the increment with a mutex guarantees that Thread $A$ will always execute before Thread $B$."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 14–15 & 18–20: On a single core, two threads are concurrent (their executions overlap over time through interleaving) capability, NOT parallel (only one instruction executes at an instant). A context switch partway through the read-modify-write cycle causes both `rA` and `rB` to read `10` and both to write `11` (a lost update). With a mutex, either A or B may finish first (nondeterminism remains), but the final value is guaranteed to be `12`."
      },
      {
        id: "e1_q9",
        part: "Part B — True / False & Core Concepts",
        type: "tf",
        points: 3,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 66 & 52",
        question: "True or False: In a Many-to-One (user-level thread) mapping model running on an 8-core processor, up to 8 user threads from that process can execute simultaneously in parallel, and a blocking disk `read()` by one thread allows the other 7 threads to keep running.",
        correct: false,
        explanation: "FALSE! Ch 2 Slides 52 & 66 Speaker Notes: In a Many-to-One model, the kernel sees only ONE schedulable kernel thread. Therefore, at most ONE CPU core can execute those user threads at any instant (no multicore parallelism), and if one user thread makes a blocking system call, the entire process blocks!"
      },
      {
        id: "e1_q10",
        part: "Part B — True / False & Core Concepts",
        type: "tf",
        points: 3,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 76–77 & 92–93",
        question: "True or False: A context switch for a currently running process $p$ can be caused directly by process $p$ itself (e.g., blocking or exiting) or by the OS (e.g., preemption), but NEVER directly by another user process $q$. Furthermore, under a non-preemptive scheduler, a scheduling decision is made ONLY when the running process blocks or terminates—NOT when a new process arrives in the Ready List or when a blocked process wakes up to Ready.",
        correct: true,
        explanation: "TRUE! Ch 2 Slide 77 explicitly shows: (1) process p itself = True, (2) the OS = True, (3) some other process q = False. And Ch 2 Slide 93 explicitly shows that a non-preemptive algorithm makes a scheduling decision ONLY when the running process requests an unavailable resource (blocks) [True] or terminates [True], and NOT when a new process arrives in RL [False] or changes from blocked to ready [False]."
      },
      {
        id: "e1_q11",
        part: "Part B — True / False & Core Concepts",
        type: "tf",
        points: 3,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slide 94",
        question: "True or False: In interactive operating systems, CPU-bound processes typically receive higher scheduling priority than I/O-bound processes, and a process's CPU burst time includes both its CPU execution time and its I/O waiting time.",
        correct: false,
        explanation: "FALSE! Ch 2 Slide 94 (Exercise 1): Both statements are False. Interactive systems prioritize I/O-bound processes (which have short CPU bursts and need quick dispatch for user responsiveness), and CPU burst time measures ONLY the time spent executing on the CPU (excluding I/O burst/waiting time)."
      },
      {
        id: "e1_q12",
        part: "Part B — True / False & Core Concepts",
        type: "tf",
        points: 3,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slide 9 & Slide 10 Speaker Notes",
        question: "True or False: Because each thread in a process has its own private stack, the hardware MMU prevents Thread B from ever reading or modifying a local stack variable belonging to Thread A, even if Thread A passes a pointer (`&x`) to Thread B.",
        correct: false,
        explanation: "FALSE! Ch 3 Slide 9 & Slide 10 Speaker Notes explicitly warn: '\"Local variable\" describes a storage location, not a guarantee that no other thread can access it... If Thread A gives Thread B the address of A’s x, then B can access that same variable while it remains alive. A thread’s stack is not a protected memory compartment within the process.'"
      },
      {
        id: "e1_q13",
        part: "Part C — Ordering, Forensics & Short Answer",
        type: "mc",
        points: 6,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 38 & 60 ( + HW1 Q7 & Q10)",
        question: "Select the response that places BOTH (i) the 5 Interrupt-Handling steps AND (ii) the 5 System Boot stages in their exact chronological order:",
        options: [
          "(i) Locate handler → Hardware detects event → Save PC/state → Service cause → Restore & resume; (ii) Bootloader → Firmware → Kernel init → Login UI → PID 1",
          "(i) Hardware detects event → Save PC & minimal state → Locate handler using interrupt vector → Service the cause → Restore and resume; (ii) Firmware (BIOS/UEFI) → Bootloader → Kernel initialization → Initial user-space process/services (PID 1) → Login or user interface",
          "(i) Save PC & minimal state → Hardware detects event → Service cause → Locate handler → Restore & resume; (ii) Firmware → Kernel init → Bootloader → PID 1 → Login UI",
          "(i) Hardware detects event → Locate handler → Save PC → Restore → Service cause; (ii) BIOS/UEFI → PID 1 → Bootloader → Kernel → Login UI"
        ],
        correct: 1,
        explanation: "Ch 1 Slide 38 (Interrupt Handling): 1. Event (Hardware detects request) -> 2. Save (PC and minimal state) -> 3. Vector (Locate handler) -> 4. Handle (Service the cause) -> 5. Return (Restore and resume). Ch 1 Slide 60 (Boot Sequence): 1. Firmware (BIOS/UEFI) -> 2. Bootloader (Select + load kernel/initramfs into RAM) -> 3. Kernel (Initialize core subsystems & mount /) -> 4. User space (PID 1 init/systemd starts services) -> 5. Login / UI."
      },
      {
        id: "e1_q14",
        part: "Part C — Ordering, Forensics & Short Answer",
        type: "frq",
        points: 8,
        chapter: "Ch 1",
        slideRef: "System Call Forensics Quiz & Ch 1 Slides 42–48",
        question: "System Call Forensics (`strace`): Consider a C program that runs:\nLine 7: `int fd = open(\"test.txt\", O_RDONLY);`\nLine 8: `if (fd == -1) { perror(\"open\"); return 1; }`\nLine 11: `ssize_t n = read(fd, buffer, sizeof(buffer));`\nLine 16: `ssize_t result = write(STDOUT_FILENO, buffer + written, n - written);`\nLine 25: `close(fd);`\n\nTrace A shows:\n`A03 openat(AT_FDCWD, \"test.txt\", O_RDONLY) = 3`\n`A04 read(3, \"Hello, OS Kernel!\\n\", 100) = 18`\n`A05 write(1, \"Hello, OS Kernel!\\n\", 18) = 18`\n`A06 close(3) = 0`\n\nTrace B shows:\n`B01 openat(AT_FDCWD, \"test.txt\", O_RDONLY) = -1 ENOENT`\n`B02 write(2, \"open: No such file or directory\\n\", 32) = 32`\n\nAnswer all 4 parts:\n(a) Explain the meaning of file descriptors `1`, `2`, and `3` in these traces.\n(b) In Trace B, what does `-1 ENOENT` mean, why does `B02` write to descriptor `2`, and why are there no `read()` or `close()` calls in Trace B?\n(c) Differentiate a **mode switch** from a **process context switch**. Does every system call in Trace A cause a context switch?\n(d) What can `strace` show, and what can it NOT directly show about the CPU mode bit or a context switch?",
        rubric: [
          "Identifies fd 1 = standard output (screen), fd 2 = standard error (error messages on screen), and fd 3 = the newly allocated file descriptor returned by the kernel for test.txt.",
          "Explains that -1 indicates openat() failed and ENOENT means 'Error No Entry / No such file or directory'; perror('open') writes the error message to stderr (fd 2) in B02; and the program returns 1 on Line 8 before reaching read() (Line 11) or close() (Line 25).",
          "Explains that a mode switch changes CPU privilege (user mode <-> kernel mode) while keeping the same process, whereas a context switch saves one process's PCB state and restores another process's PCB state. Every system call requires a mode switch, but NOT necessarily a context switch (only if it blocks on I/O or is preempted).",
          "States that strace intercepts and displays user/kernel boundary system calls (names, arguments, return values, errno), but CANNOT directly inspect the hardware CPU mode bit or observe whether the OS scheduler performed a process context switch while servicing the call."
        ],
        sampleAnswer: "(a) Descriptor 1 is standard output (stdout, normally the screen), descriptor 2 is standard error (stderr, for error messages), and descriptor 3 is the file descriptor assigned by the kernel when `test.txt` is opened in `A03`.\n(b) `-1` means the `openat()` system call failed, and `ENOENT` means the requested file/path (`test.txt`) does not exist. `B02` writes to descriptor `2` because `fd == -1` on Line 8 triggers `perror(\"open\")`, which writes diagnostic messages to `stderr` (`fd 2`). Because Line 8 immediately executes `return 1;`, the program exits before reaching `read()` (Line 11) or `close()` (Line 25), and no valid file descriptor was ever opened.\n(c) A mode switch changes the CPU privilege bit between user mode and kernel mode while the same process continues executing. A process context switch changes which process is running on the CPU (saving Process A's registers/PC to PCB_A and restoring PCB_B). Every system call requires a mode switch into kernel mode, but it does NOT require a context switch unless the process blocks waiting for I/O or its time slice expires.\n(d) `strace` shows system call names, arguments, return values, and error codes (`errno`) across the user/kernel boundary, but it cannot directly observe the hardware CPU mode bit or whether the scheduler performed a context switch during the call."
      },
      {
        id: "e1_q15",
        part: "Part C — Ordering, Forensics & Short Answer",
        type: "frq",
        points: 8,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 12–19 ( + HW1 Q13–Q15)",
        question: "Process States, Suspended Queues, and the PCB:\n(a) Process $P$ is runnable in main memory but not currently using the CPU. Process $Q$ is waiting for a disk read in main memory. Memory pressure causes the OS to swap $Q$ out to secondary storage. Later, the disk controller signals that $Q$'s disk read has completed, and afterward memory pressure subsides so the OS restores $Q$ to RAM. Trace the exact state/queue sequence of $P$ and $Q$ using precise transition names.\n(b) List the 4 categories of information stored in the Process Control Block (PCB) and explain the special roles of the Program Counter (PC) and CPU registers when a process is preempted.",
        rubric: [
          "Correctly identifies Process P as remaining in the Ready state (Ready queue in RAM), leaving only when selected by the short-term scheduler and dispatched (Ready -> Running).",
          "Correctly traces Process Q: Waiting/Blocked (in Device/I/O queue in RAM) -> swapped out to Blocked Suspended -> when disk I/O finishes, transitions to Ready Suspended (NOT directly to Ready!) -> when swapped back into RAM by medium-term scheduler, transitions to Ready.",
          "Lists the 4 PCB categories: (1) Identity & ancestry (PID, PPID, UID, GID), (2) CPU context/state (PC, SP, general registers, status flags), (3) Process state & scheduling info (state, priority, queue pointers), (4) Memory management & accounting/I/O info (page-table pointers, open file descriptors, CPU time/limits).",
          "Explains the special roles: PC acts as the execution checkpoint (address of the next instruction to execute), while CPU registers preserve live intermediate computation results, stack pointer, and condition flags so preemption is completely transparent."
        ],
        sampleAnswer: "(a) Before suspension: Process P is in the Ready state (in the Ready queue in RAM); Process Q is in the Waiting/Blocked state (in a Device/I/O queue in RAM). When memory pressure swaps Q out: P stays in Ready; Q moves to Blocked Suspended (on disk). When the disk I/O completes while Q is suspended: Q transitions from Blocked Suspended to Ready Suspended (it is now logically ready to run, but still on disk). Once memory pressure is relieved and the OS restores/swaps Q back into RAM, Q transitions from Ready Suspended to Ready (and later Ready -> Running via dispatch).\n(b) Four PCB categories: (1) Identity (PID, PPID, UID, group credentials), (2) CPU Context (PC, stack pointer, general-purpose registers, flags), (3) State & Scheduling (current process state, priority, queue links), and (4) Memory, I/O & Accounting (page-table pointers, open file descriptors, CPU time usage). The PC serves as an execution timestamp/checkpoint holding the address of the next instruction, and the CPU registers hold theunfinished intermediate arithmetic values, stack frame pointers, and flags so the process can resume at the exact instruction without corruption."
      },
      {
        id: "e1_q16",
        part: "Part D — Quantitative & Trace Workouts",
        type: "numeric_multi",
        points: 8,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 12–15 (Multiprogramming Challenges 1 & 2)",
        question: "Multiprogramming Without Time-Sharing (Exact Slide Challenge Format):\nProcesses $p_1$ and $p_2$ execute on a system with a single CPU. Each process executes one compute-bound phase followed by one I/O-bound phase. $p_1$ starts first at $t = 0$. The system uses multiprogramming WITHOUT time-sharing (so a running process keeps the CPU until its compute phase finishes).\n\n• Scenario A (1 I/O Device): $p_1$ has Compute = $10$, I/O = $50$. $p_2$ has Compute = $30$, I/O = $60$. Only 1 I/O device exists (so I/O phases cannot overlap).\n• Scenario B (2 Identical I/O Devices): $p_1$ has Compute = $20$, I/O = $40$. $p_2$ has Compute = $10$, I/O = $80$. Two identical I/O devices exist (so I/O phases CAN overlap).\n\nCompute the total termination time for:",
        fields: [
          { label: "Scenario A WITHOUT multiprogramming (time units)", answer: 150 },
          { label: "Scenario A WITH multiprogramming, 1 I/O device (time units)", answer: 120 },
          { label: "Scenario B WITHOUT multiprogramming (time units)", answer: 150 },
          { label: "Scenario B WITH multiprogramming, 2 I/O devices (time units)", answer: 110 }
        ],
        explanation: "From Ch 1 Slides 12–15:\n• Scenario A (1 I/O device): Without multiprogramming = (10 + 50) + (30 + 60) = 60 + 90 = 150. With multiprogramming: p1 runs CPU 0->10, then uses the single I/O device 10->60. p2 starts CPU immediately when p1 enters I/O at t=10 and runs CPU 10->40. At t=40, the single I/O device is still busy with p1 until t=60! So p2 waits 40->60, then performs its 60-unit I/O from 60->120. Termination = 120.\n• Scenario B (2 I/O devices): Without multiprogramming = (20 + 40) + (10 + 80) = 60 + 90 = 150. With multiprogramming: p1 runs CPU 0->20, then I/O on Device 1 from 20->60. p2 starts CPU at t=20 and runs 20->30, then immediately starts its 80-unit I/O on Device 2 from 30->110 (overlapping with p1's I/O). Termination = max(60, 110) = 110."
      },
      {
        id: "e1_q17",
        part: "Part D — Quantitative & Trace Workouts",
        type: "numeric_multi",
        points: 8,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 25–26 (Priority Ready List create/timeout Exercise)",
        question: "Process Creation & Priority Ready List Trace (Ch 2 Slides 25–26):\nConsider a single-CPU system where the Ready List (RL) has three priority levels: 0, 1, and 2 (where 2 is highest priority).\n• Initially, only Process 0 (`PCB 0`) exists at priority 2 and is running.\n• `create(n)` creates a new child process (assigned the next sequential PCB number: 1, 2, 3, 4...) at the tail of priority queue `n`. Creating a process does NOT preempt the running process.\n• `timeout()` moves the currently running process to the tail of its priority queue, and the head of the highest-priority nonempty queue begins running.\n\nThe following sequence is executed by whichever process is running at that moment:\n1. `create(1)`\n2. `create(2)`\n3. `timeout()`\n4. `create(0)`\n5. `timeout()`\n6. `create(2)`\n\nDetermine the final counts and creators:",
        fields: [
          { label: "How many direct children does Process 0 (P0) have?", answer: 3 },
          { label: "How many direct children does Process 2 (P2) have?", answer: 1 },
          { label: "Which PCB number (enter integer 0, 1, or 2) is parent of P3?", answer: 2 },
          { label: "Which PCB number (enter integer 0, 1, or 2) is parent of P4?", answer: 0 }
        ],
        explanation: "Step-by-step trace (Ch 2 Slide 26):\n• Initial: Q2=[P0*], Q1=[], Q0=[].\n1. `create(1)`: Running P0 creates P1 (prio 1). Q2=[P0*], Q1=[P1].\n2. `create(2)`: Running P0 creates P2 (prio 2). Q2=[P0*, P2], Q1=[P1].\n3. `timeout()`: P0 moves to tail of Q2; P2 becomes running! Q2=[P2*, P0], Q1=[P1].\n4. `create(0)`: Running P2 creates P3 (prio 0). Q2=[P2*, P0], Q1=[P1], Q0=[P3].\n5. `timeout()`: P2 moves to tail of Q2; P0 becomes running! Q2=[P0*, P2], Q1=[P1], Q0=[P3].\n6. `create(2)`: Running P0 creates P4 (prio 2). Q2=[P0*, P2, P4].\nResult: P0 has 3 children (P1, P2, P4); P2 has 1 child (P3); P1, P3, P4 have 0 children."
      },
      {
        id: "e1_q18",
        part: "Part D — Quantitative & Trace Workouts",
        type: "numeric_multi",
        points: 8,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 53–54 (Server Caching Thread Exercise)",
        question: "Single-Threaded vs. Multi-Threaded Server Analysis (Ch 2 Slides 53–54):\nA server accepts client requests arriving on average every $25\\text{ ms}$.\n• Processing a request takes $15\\text{ ms}$ of CPU time if the data is in the memory cache.\n• $80\\%$ of requests hit in the memory cache (no disk access needed).\n• The remaining $20\\%$ of requests miss the cache and require an additional $75\\text{ ms}$ blocking disk access (for $15 + 75 = 90\\text{ ms}$ total elapsed time if single-threaded).\n• Creating a new thread for a request costs $10\\text{ ms}$ of CPU overhead, but allows disk waits to overlap with CPU work.\n\nCalculate:",
        fields: [
          { label: "Average time per request for a Single-Threaded server (ms)", answer: 30 },
          { label: "Average CPU time per request for a Multi-Threaded server (ms)", answer: 25 },
          { label: "Can the Single-Threaded server keep up with 25 ms arrivals? (Enter 1 for Yes, 0 for No)", answer: 0 }
        ],
        explanation: "From Ch 2 Slide 54:\n• Single-threaded process blocks during the 75 ms disk access: Average time per request = 0.8 * 15 + 0.2 * (15 + 75) = 12 + 0.2 * 90 = 12 + 18 = 30 ms. Since requests arrive every 25 ms and 30 ms > 25 ms, the single-threaded server cannot keep up and an unbounded queue forms (0 = No).\n• Multi-threaded process incurs 10 ms thread creation overhead per request, but does not block the CPU during disk access: Average CPU time per request = 10 + 15 = 25 ms, which matches the 25 ms arrival interval and keeps up!"
      },
      {
        id: "e1_q19",
        part: "Part D — Quantitative & Trace Workouts",
        type: "numeric_multi",
        points: 10,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 125–126 (Round Robin Q=4 ms Exercise)",
        question: "Round Robin (RR) CPU Scheduling Workout (Ch 2 Slides 125–126):\nGiven Time Quantum $Q = 4\\text{ ms}$ and three processes:\n• $P_1$: Arrival Time = $0\\text{ ms}$, Burst Time = $10\\text{ ms}$\n• $P_2$: Arrival Time = $1\\text{ ms}$, Burst Time = $5\\text{ ms}$\n• $P_3$: Arrival Time = $2\\text{ ms}$, Burst Time = $8\\text{ ms}$\n\nTrace the Round Robin execution (remember: processes arriving before or at quantum expiration join the ready queue before the preempted running process is re-queued) and enter the exact metrics:",
        fields: [
          { label: "P1 Completion Time (CT in ms)", answer: 23 },
          { label: "P2 Completion Time (CT in ms)", answer: 17 },
          { label: "P3 Completion Time (CT in ms)", answer: 21 },
          { label: "P1 Waiting Time (WT = TAT - BT in ms)", answer: 13 },
          { label: "P2 Waiting Time (WT = TAT - BT in ms)", answer: 11 },
          { label: "P3 Waiting Time (WT = TAT - BT in ms)", answer: 11 }
        ],
        explanation: "From Ch 2 Slide 126:\n• Gantt Chart: 0–4: P1 (rem 6; P2, P3 arrived at 1, 2 so queue=[P2, P3, P1]) | 4–8: P2 (rem 1; queue=[P3, P1, P2]) | 8–12: P3 (rem 4; queue=[P1, P2, P3]) | 12–16: P1 (rem 2; queue=[P2, P3, P1]) | 16–17: P2 (finishes at 17!) | 17–21: P3 (finishes at 21!) | 21–23: P1 (finishes at 23!).\n• Completion Times (CT): P1 = 23, P2 = 17, P3 = 21.\n• Turnaround Times (TAT = CT - AT): P1 = 23 - 0 = 23; P2 = 17 - 1 = 16; P3 = 21 - 2 = 19 (Avg TAT = 58/3 = 19.33 ms).\n• Waiting Times (WT = TAT - BT): P1 = 23 - 10 = 13; P2 = 16 - 5 = 11; P3 = 19 - 8 = 11 (Avg WT = 35/3 = 11.67 ms)."
      },
      {
        id: "e1_q20",
        part: "Part D — Quantitative & Trace Workouts",
        type: "numeric_multi",
        points: 10,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 139–141 (4-Level MLFQ Workout)",
        question: "Multilevel Feedback Queue (MLFQ) 4-Queue Workout (Ch 2 Slides 139–141):\nA system uses 4 queues ($Q_0 > Q_1 > Q_2 > Q_3$):\n• $Q_0$ (highest): Round Robin, quantum = $1\\text{ ms}$\n• $Q_1$: Round Robin, quantum = $2\\text{ ms}$\n• $Q_2$: Round Robin, quantum = $4\\text{ ms}$\n• $Q_3$ (lowest): FCFS (runs to completion)\n\nRules: New processes enter $Q_0$. Always run the highest-priority nonempty queue. If a process uses its entire quantum in $Q_0, Q_1,$ or $Q_2$ and is still unfinished, it moves down one queue level. If it finishes (even at the exact end of a quantum), it exits immediately.\n\nProcesses:\n• $P_1$: Arrival = $0\\text{ ms}$, Burst = $8\\text{ ms}$\n• $P_2$: Arrival = $0\\text{ ms}$, Burst = $3\\text{ ms}$ (tie-break: $P_1$ before $P_2$)\n• $P_3$: Arrival = $1\\text{ ms}$, Burst = $5\\text{ ms}$\n\nDetermine the exact completion times and finishing queues:",
        fields: [
          { label: "P2 Completion Time (ms)", answer: 7 },
          { label: "P3 Completion Time (ms)", answer: 15 },
          { label: "P1 Completion Time (ms)", answer: 16 },
          { label: "Queue number where P2 finishes (enter 0, 1, 2, or 3)", answer: 1 },
          { label: "Queue number where P3 finishes (enter 0, 1, 2, or 3)", answer: 2 },
          { label: "Queue number where P1 finishes (enter 0, 1, 2, or 3)", answer: 3 }
        ],
        explanation: "From Ch 2 Slides 140–141:\n• Step 1 (Q0, q=1ms): At t=0, P1 and P2 arrive (P1 first). 0–1: P1 runs 1ms (rem 7 -> Q1). At t=1, P3 arrives in Q0 behind P2. 1–2: P2 runs 1ms (rem 2 -> Q1). 2–3: P3 runs 1ms (rem 4 -> Q1).\n• Step 2 (Q0 empty; run Q1, q=2ms, order P1, P2, P3): 3–5: P1 runs 2ms (rem 5 -> Q2). 5–7: P2 runs 2ms (rem 0 -> Finishes at t=7 in Q1!). 7–9: P3 runs 2ms (rem 2 -> Q2).\n• Step 3 (Q0, Q1 empty; run Q2, q=4ms, order P1, P3): 9–13: P1 runs 4ms (rem 1 -> Q3). 13–15: P3 runs 2ms (rem 0 -> Finishes at t=15 in Q2!).\n• Step 4 (Only Q3 has P1): 15–16: P1 runs 1ms and finishes at t=16 in Q3."
      },
      {
        id: "e1_q21",
        part: "Part D — Quantitative & Trace Workouts",
        type: "numeric_multi",
        points: 6,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 16–17 (Single-Core Overlap Exercise)",
        question: "Concurrency & I/O Overlap Calculation (Ch 3 Slides 16–17):\nA program runs on a single-core computer and performs two independent tasks:\n• Task A: Waits $10\\text{ ms}$ for a disk read (performed by the disk controller).\n• Task B: Performs $6\\text{ ms}$ of CPU computation.\n\nCalculate:",
        fields: [
          { label: "Sequential total time if Task A finishes before Task B starts (ms)", answer: 16 },
          { label: "Ideal concurrent total time if two threads overlap A's I/O wait with B's CPU work (ms)", answer: 10 },
          { label: "Total time if thread coordination adds 2 ms overhead to the ideal concurrent time (ms)", answer: 12 },
          { label: "Net performance savings (in ms) of concurrent with 2 ms overhead vs sequential", answer: 4 }
        ],
        explanation: "From Ch 3 Slide 17 (Answer Key):\n1. Sequential: 10 ms waiting + 6 ms computation = 16 ms.\n2. Ideal concurrent overlap: Task B completes its 6 ms CPU work during Task A's 10 ms disk read wait = 10 ms total (saving 6 ms before overhead).\n3. With 2 ms coordination overhead: 10 + 2 = 12 ms total.\n4. Net savings compared with sequential: 16 - 12 = 4 ms (or 6 ms saved - 2 ms overhead = 4 ms)."
      }
    ]
  },
  {
    id: "exam2",
    title: "Practice Exam 2: 'Under-the-Slides' Speaker Notes & Deep Traps Exam",
    subtitle: "Specifically targets the explanations, C/Linux internals, and edge cases written in Dr. Hosseini's Speaker Notes under the slides.",
    badge: "Speaker Notes Focus • 100 Pts",
    timeMinutes: 75,
    questions: [
      {
        id: "e2_q1",
        part: "Part A — Speaker Note Internals (Ch 1)",
        type: "mc",
        points: 5,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slide 16 & 19 Speaker Notes",
        question: "According to the Speaker Notes on Ch 1 Slides 16 & 19, which of the following statements about Real-Time Operating Systems (FreeRTOS, VxWorks, QNX) is accurate?",
        options: [
          "FreeRTOS is a proprietary desktop OS owned by Apple; VxWorks is an open-source Linux distribution.",
          "FreeRTOS is an open-source RTOS kernel for microcontrollers managed by Amazon Web Services (AWS since 2017); VxWorks (by Wind River) is used in aerospace/defense/medical mission-critical systems; QNX is a commercial Unix-like microkernel RTOS.",
          "QNX is a monolithic batch OS that does not support preemption or message passing.",
          "Real-time operating systems are defined as systems that maximize average batch throughput without deadlines."
        ],
        correct: 1,
        explanation: "Ch 1 Slide 16 & 19 Speaker Notes explicitly detail: FreeRTOS (open-source RTOS kernel for microcontrollers, stewardship taken over by AWS in 2017), VxWorks (developed by Wind River Systems, subsidiary of Aptiv, for aerospace, defense, medical, automotive), and QNX (commercial Unix-like microkernel RTOS for embedded systems)."
      },
      {
        id: "e2_q2",
        part: "Part A — Speaker Note Internals (Ch 1)",
        type: "mc",
        points: 5,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slide 23 Speaker Notes",
        question: "In the Speaker Notes for Ch 1 Slide 23 ('Device controllers let specialized hardware operate independently'), how does Dr. Hosseini distinguish a Physical Device, a Device Controller, and a Device Driver when reading from an SSD?",
        options: [
          "Both the device controller and the device driver are software modules running in user mode.",
          "The physical device is the actual hardware; the device controller is hardware that operates the device (exposing registers and buffers); the device driver is OS software that communicates with the controller.",
          "The device driver is a microchip soldered onto the SSD, while the device controller is a C library wrapper.",
          "The OS bypasses both the driver and controller to directly manipulate the SSD's electronic flash cells from user space."
        ],
        correct: 1,
        explanation: "Ch 1 Slide 23 Speaker Notes: 'Physical device — the actual hardware; Device controller — hardware that operates the device; Device driver — OS software that communicates with the controller. A device controller is hardware. A device driver is software.'"
      },
      {
        id: "e2_q3",
        part: "Part A — Speaker Note Internals (Ch 1)",
        type: "mc",
        points: 5,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 24–25 Speaker Notes",
        question: "According to the Speaker Notes on Ch 1 Slides 24–25, at what exact point in the CPU's instruction cycle does the processor recognize and transfer control to a pending hardware interrupt?",
        options: [
          "In the middle of an ALU addition before the instruction finishes decoding.",
          "Only when the computer is rebooted by UEFI firmware.",
          "At an instruction boundary (the 'Check Events' stage after Write Back/Update), if an interrupt is pending and enabled.",
          "Before the Fetch stage, by asking the user application for permission to flip the mode bit."
        ],
        correct: 2,
        explanation: "Ch 1 Slide 25 Speaker Notes: 'Check events: At an instruction boundary, the CPU can recognize a pending interrupt. If no interrupt requires attention, it continues with the next instruction. If an interrupt is pending and enabled, control transfers to an operating-system interrupt handler.'"
      },
      {
        id: "e2_q4",
        part: "Part A — Speaker Note Internals (Ch 1)",
        type: "mc",
        points: 5,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 42–43 Speaker Notes",
        question: "According to the Speaker Notes on Ch 1 Slides 42–43, what happens on x86-64 Linux inside the C library wrapper when a program calls `read(fd, buf, n)` and the requested file descriptor is invalid?",
        options: [
          "The wrapper places the syscall number in `%rax`, executes `syscall` (historically `int 0x80`), receives a negative error code from the kernel in a register, and translates that negative return value into setting `errno` and returning `-1` to the application.",
          "The kernel sets `errno` directly in user space and terminates the process with a segmentation fault.",
          "The wrapper executes in kernel mode without a trap instruction and returns `0` (end of file).",
          "The CPU halts until the user manually resets the file descriptor table."
        ],
        correct: 0,
        explanation: "Ch 1 Slide 42 & 43 Speaker Notes: On x86-64 Linux, the `glibc` wrapper puts the syscall number into `%rax`, loads arguments into registers, and executes `syscall` (historically `int 0x80`). In Step 6 ('the wrapper processes the result'): 'many wrappers translate a negative kernel return value into setting errno and returning -1.'"
      },
      {
        id: "e2_q5",
        part: "Part A — Speaker Note Internals (Ch 1)",
        type: "mc",
        points: 5,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slides 60–65 Speaker Notes",
        question: "Which statement accurately reflects the Speaker Notes on Ch 1 Slides 60–65 regarding BIOS vs. UEFI, the Bootloader, and PID 1 (`init` vs. `systemd`)?",
        options: [
          "Legacy BIOS loads EFI applications from the GPT EFI System Partition, whereas UEFI only reads 512-byte MBR boot sectors.",
          "The CPU can execute the compressed Linux kernel image (`/boot/vmlinuz`) directly off the SSD without the bootloader copying it into RAM.",
          "BIOS reads boot code from the MBR while UEFI loads EFI applications from the EFI System Partition (supporting GPT and Secure Boot); the bootloader (e.g., GRUB) must copy the kernel into RAM so the CPU can fetch instructions from memory; and modern `systemd` (PID 1) manages units with dependencies, starts services in parallel, and uses targets instead of traditional sequential `init` runlevels.",
          "If PID 1 exits after startup, user-space applications continue running normally without impact."
        ],
        correct: 2,
        explanation: "Ch 1 Slides 60–65 Speaker Notes cover all three: (1) Legacy BIOS reads from the MBR while UEFI loads from the EFI System Partition and supports GPT disks and Secure Boot; (2) The kernel cannot execute directly from normal SSD/HDD storage, so GRUB copies `/boot/vmlinuz` and `initramfs` into RAM; (3) Traditional `init` runs scripts sequentially and uses runlevels, whereas `systemd` (also PID 1) manages units/dependencies, starts independent services in parallel, and uses targets. If PID 1 exits, the system cannot continue normal operation."
      },
      {
        id: "e2_q6",
        part: "Part B — Speaker Note Internals (Ch 2)",
        type: "mc",
        points: 5,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slide 7 Speaker Notes",
        question: "In the Speaker Notes for Ch 2 Slide 7 ('A process address space has regions with different roles'), how is the Data segment subdivided?",
        options: [
          "Into the Stack section (for parameters) and the Text section (for read-only instructions).",
          "Initialized global and static variables are stored in the Data section, while uninitialized or zero-initialized global/static variables are stored in the BSS section.",
          "Global variables are stored on the Heap, while `malloc()` allocations are stored in the BSS section.",
          "The Data segment is strictly private to each thread in a process, whereas the Stack is shared."
        ],
        correct: 1,
        explanation: "Ch 2 Slide 7 Speaker Notes: 'Data segment: Contains global and static variables. Initialized variables are stored in the data section. Uninitialized or zero-initialized variables are generally stored in the BSS section.'"
      },
      {
        id: "e2_q7",
        part: "Part B — Speaker Note Internals (Ch 2)",
        type: "mc",
        points: 5,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slide 28 Speaker Notes",
        question: "In Ch 2 Slide 28, when `execvp()` fails in the child process after `fork()`, the code calls `perror(\"execvp\"); _exit(127);`. Why do the Speaker Notes specifically ask to use `_exit(127)` instead of standard `exit(127)` in the child, and what does `127` signify?",
        options: [
          "`_exit(127)` restarts the parent process, and `127` means the child succeeded.",
          "`_exit()` terminates the child immediately without flushing copied `stdio` buffers inherited from the parent (preventing duplicate output), and exit code `127` conventionally indicates that the requested command could not be executed or was not found.",
          "`exit()` is a privileged kernel instruction that causes a hardware fault in user mode.",
          "`_exit(127)` automatically re-runs `execvp()` 127 times before giving up."
        ],
        correct: 1,
        explanation: "Ch 2 Slide 28 Speaker Notes: 'Ask: Why use _exit() after exec failure in the child? It avoids flushing copied stdio buffers inherited from the parent... 127 is conventionally used to indicate that a requested command could not be executed or was not found.'"
      },
      {
        id: "e2_q8",
        part: "Part B — Speaker Note Internals (Ch 2)",
        type: "mc",
        points: 5,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slide 60 (+ Speaker Notes)",
        question: "How does the Linux kernel internally represent processes and threads, and how do `clone()` / `clone3()` flags control their behavior?",
        options: [
          "Linux uses completely separate kernel data structures (`proc_struct` vs `thread_struct`) and never shares file descriptors.",
          "Linux represents both processes and threads as schedulable 'tasks' (`task_struct`); `clone()` flags determine what is shared: `CLONE_VM` shares the virtual address space, `CLONE_FILES` shares the file-descriptor table, and `CLONE_THREAD` places the new task in the same thread group.",
          "`CLONE_VM` creates a new hardware virtual machine, while `CLONE_THREAD` disables multicore execution.",
          "Linux only supports user-level many-to-one threads and ignores `clone()` flags."
        ],
        correct: 1,
        explanation: "Ch 2 Slide 60 & Speaker Notes: 'Linux does not implement processes and threads as completely different objects. Both are tasks; their resource-sharing configuration determines how they behave. The clone() or clone3() system call creates a new task. Flags determine what the new task shares with its creator: CLONE_VM: shares the same virtual address space. CLONE_FILES: shares the file-descriptor table. CLONE_THREAD: places the new task in the same thread group.'"
      },
      {
        id: "e2_q9",
        part: "Part B — Speaker Note Internals (Ch 2)",
        type: "mc",
        points: 5,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 82–83 (+ Speaker Notes)",
        question: "Process $A$ contains threads $T_1$ and $T_2$; Process $B$ contains thread $T_3$. According to Ch 2 Slides 82–83 Speaker Notes, why is switching $T_1 \\to T_2$ *usually* (and why should you avoid saying *always*) cheaper than switching $T_1 \\to T_3$, and what role does the TLB play?",
        options: [
          "Switching $T_1 \\to T_3$ is always cheaper because Process B has a separate TLB chip.",
          "Switching $T_1 \\to T_2$ is usually cheaper because both threads share Process A's address space and page tables, keeping the TLB (Translation Lookaside Buffer in the MMU that caches Virtual-Page-Number to Physical-Frame-Number translations so memory accesses don't require two RAM lookups) warm; however, avoid saying 'always' because hardware features like ASIDs/PCIDs, cache state, and kernel design affect actual cost.",
          "The TLB is a secondary storage partition on the SSD used for Blocked Suspended processes.",
          "Thread context switches require zero CPU instructions and do not save or restore registers."
        ],
        correct: 1,
        explanation: "Ch 2 Slide 82 & 83 Speaker Notes: (1) The TLB is a high-speed hardware cache inside the MMU storing recent VPN-to-PFN translations; without a TLB, every virtual memory access requires two physical memory accesses (page table lookup + actual data). (2) Switching T1 -> T2 is usually cheaper because they share Process A's address space, whereas T1 -> T3 switches to Process B's address space. The notes explicitly caution: 'Avoid saying \"always\": architecture, ASIDs/PCIDs, cache state, and kernel implementation affect actual cost.'"
      },
      {
        id: "e2_q10",
        part: "Part B — Speaker Note Internals (Ch 2)",
        type: "mc",
        points: 5,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 145–149 (+ Speaker Notes)",
        question: "Which statement accurately describes NUMA, Processor Affinity, Real-Time RMS vs. EDF, and Linux's transition from CFS to EEVDF (Ch 2 Slides 145–149)?",
        options: [
          "In NUMA, all memory accesses have identical latency; RMS uses dynamic deadlines while EDF uses fixed periods; and Linux kernel 6.6 replaced EEVDF with FIFO.",
          "In NUMA, accessing local node RAM is faster than remote RAM across the interconnect (so migrating a thread for load balancing can hurt cache warmth and NUMA locality); RMS assigns fixed priorities (shorter period = higher priority) while EDF uses dynamic priorities (earliest deadline first, up to 100% utilization); and Linux (starting in kernel 6.6) is moving from CFS (`vruntime`) to EEVDF (which checks eligibility/nonnegative lag first, then picks the earliest virtual deadline).",
          "Soft affinity strictly forbids a thread from ever migrating across cores, whereas hard affinity is just a hint.",
          "CFS selects the task with the largest `vruntime`, while EEVDF ignores virtual deadlines."
        ],
        correct: 1,
        explanation: "Ch 2 Slides 145–149 (+ Speaker Notes): (1) NUMA = Non-Uniform Memory Access; moving a thread from Package 0 to Package 1 while its pages remain on Node 0 increases remote-memory latency and cache misses. (2) Soft affinity prefers the same CPU; hard affinity restricts the task to a specified CPU set. (3) RMS = fixed priority (shorter period -> higher priority); EDF = dynamic priority (nearest deadline runs first, up to 100% CPU utilization). (4) Linux CFS tracks `vruntime` (selects smallest `vruntime`); starting in kernel 6.6, Linux began transitioning to EEVDF (Earliest Eligible Virtual Deadline First: Step 1 checks eligibility [nonnegative lag / owed CPU time], Step 2 selects earliest virtual deadline)."
      },
      {
        id: "e2_q11",
        part: "Part C — Deep-Dive Traces & Explanations",
        type: "numeric_multi",
        points: 10,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 23–24 (PCB & RCB Resource Blocking Exercise)",
        question: "PCB and RCB Linked-List Data Structures (Ch 2 Slides 23–24):\nTwo processes (`7` and `8`) are currently on the Ready List (`RL`).\n• Initially: Process `8` is at the head of `RL` (`RL = 8`) and its `process_state` is `running`. Process `8`'s `next` field points to `7`, and Process `7`'s `process_state` is `ready` (`next = —`).\n• Process `7` currently holds two allocated resources (`15` and `25`): `PCB[7].other_resources = 15`, and `RCB[15].next = 25`.\n• Both `RCB[15].state` and `RCB[25].state` are `allocated` with empty `waiting_list`.\n\nNow, running Process `8` requests Resource `15` (which is currently held by Process `7`). Enter the updated numeric values in the kernel data structures after this request:",
        fields: [
          { label: "Which process number is now at the head of RL and 'running'?", answer: 7 },
          { label: "Which process number is now in RCB[15].waiting_list?", answer: 8 },
          { label: "Which resource number is still at the head of PCB[7].other_resources?", answer: 15 },
          { label: "How many processes remain on the Ready List (RL)?", answer: 1 }
        ],
        explanation: "From Ch 2 Slide 24 (Solution Diagram):\nWhen running Process 8 requests unavailable Resource 15 (held by Process 7):\n1. Process 8 transitions from `running` to `blocked` (`PCB[8].process_state = blocked`, `PCB[8].next = —`).\n2. Process 8 is removed from `RL` and placed on Resource 15's waiting list (`RCB[15].waiting_list = 8`).\n3. Process 7 is now the only process on `RL` (`RL = 7`, count = 1) and transitions from `ready` to `running` (`PCB[7].process_state = running`), still holding `other_resources = 15 -> 25`."
      },
      {
        id: "e2_q12",
        part: "Part C — Deep-Dive Traces & Explanations",
        type: "mc",
        points: 6,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 128–129 (Impact of Quantum Size Exercise)",
        question: "$n$ processes are time-sharing the CPU under Round Robin. The average total CPU burst time is $T$, the time quantum is $Q$, and the context-switching overhead is $S$. What is the fraction of CPU time wasted on context switching in the two cases (a) $T < Q$ and (b) $T \\gg Q$?",
        options: [
          "(a) $T / (T + S)$ and (b) $Q / (Q + S)$",
          "(a) $S / (T + S)$ because the quantum never expires (timing sequence repeats $T, S, T, S, \\dots$); and (b) $S / (Q + S)$ because each burst $T$ requires many quanta $Q$, each followed by a switch $S$.",
          "(a) $0$ and (b) $S / T$",
          "(a) $S / (Q + S)$ and (b) $S / (T + S)$"
        ],
        correct: 1,
        explanation: "Exact solution from Ch 2 Slide 129:\n• Case (a) T < Q: When T < Q, the quantum never expires. The execution repeats the timing sequence T, S, T, S... Thus for every T ms of execution, T + S ms of CPU time are needed. The fraction of wasted CPU time is S / (T + S).\n• Case (b) T >> Q: When T >> Q, each execution of T needs many quanta to complete. Each quantum Q is followed by a context switch S. The fraction of wasted CPU time is S / (Q + S)."
      },
      {
        id: "e2_q13",
        part: "Part C — Deep-Dive Traces & Explanations",
        type: "mc",
        points: 6,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 135–136 (Multilevel Queue Exercise)",
        question: "In a Multilevel Queue (MLQ) scheduler with preemption between priority levels, Process $p$ is at the head of the queue at level $N-3$, followed by Process $q$ at the same level $N-3$. Queues at higher levels $N$ through $N-2$ are initially empty. The time quantum at every level is $1$ time unit. $p$ needs $2$ units of CPU time and $q$ needs $1$ unit.\n(1) If no other processes arrive, which terminates first?\n(2) If, right when $p$ starts executing at $t=0$, a new process $r$ needing $3$ units of CPU time arrives at higher priority level $N$, in what order do the 3 processes terminate?",
        options: [
          "(1) $p$ terminates first; (2) $p, r, q$",
          "(1) $q$ terminates first; (2) $r, q, p$",
          "(1) $q$ terminates first; (2) $r, p, q$",
          "(1) $p$ terminates first; (2) $r, q, p$"
        ],
        correct: 1,
        explanation: "Exact solution from Ch 2 Slide 136:\n(1) `q` terminates first: `p` starts, executes for 1 quantum (1 unit, remaining = 1), and goes to the tail of level N-3 behind `q`. Then `q` runs for 1 unit and terminates before `p`.\n(2) `r, q, p`: When `r` arrives at level N (higher priority than N-3), `r` immediately preempts `p`, which goes to the tail of level N-3 behind `q`. `r` runs at level N until it terminates (3 units). Then level N-3 resumes with `q` at the head, so `q` finishes in 1 unit, followed by `p`!"
      },
      {
        id: "e2_q14",
        part: "Part C — Deep-Dive Traces & Explanations",
        type: "frq",
        points: 14,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 61–63 (+ Speaker Notes)",
        question: "POSIX Threads (`pthreads`) vs. Python GIL & Thread Pools:\nConsider the C program from Ch 2 Slides 61–62:\n```c\nvoid *worker_thread(void *arg) {\n    int id = *(int *)arg;\n    printf(\"Worker %d; pthread=%lu\\n\", id, (unsigned long)pthread_self());\n    return NULL;\n}\nint main(void) {\n    pthread_t thread;\n    int id = 1;\n    int rc = pthread_create(&thread, NULL, worker_thread, &id);\n    rc = pthread_join(thread, NULL);\n    puts(\"Worker completed.\");\n}\n```\n(a) Explain each of the 4 arguments passed to `pthread_create(&thread, NULL, worker_thread, &id)`, what `int id = *(int *)arg;` does, and why `pthread_self()` is not necessarily the kernel TID.\n(b) What happens if `pthread_join(thread, NULL)` is omitted before `main` returns `EXIT_SUCCESS`?\n(c) Why do Python threads work well for I/O-bound workloads but not for CPU-bound parallel bytecode execution, and what 4 benefits does a Thread Pool provide?",
        rubric: [
          "Explains the 4 arguments of pthread_create: (1) &thread = pointer to store new pthread ID, (2) NULL = default thread attributes, (3) worker_thread = function pointer to run, (4) &id = void* argument passed to worker_thread; and explains that *(int *)arg casts void* to int* and dereferences it, while pthread_self() returns the user-space library pthread ID rather than the OS kernel task ID.",
          "Explains that pthread_join() blocks main until the worker finishes; if omitted, main may return from main() and terminate the entire process before the worker thread finishes.",
          "Explains that Python's Global Interpreter Lock (GIL) restricts CPU-bound Python bytecode from running on multiple cores simultaneously (so multiprocessing is preferred for CPU-bound work, whereas threads overlap I/O waits well).",
          "Lists the 4 Thread Pool benefits (Slide 64): (1) Avoid repeated thread creation/destruction cost, (2) Limit resource consumption (bound max concurrent threads), (3) Queue excess tasks when workers are busy, (4) Centralize lifecycle/error/cancellation management."
        ],
        sampleAnswer: "(a) The 4 arguments to `pthread_create` are: `&thread` (output pointer where the library stores the new thread's identifier), `NULL` (use default thread attributes), `worker_thread` (the function the new thread will execute), and `&id` (pointer to the argument passed as `void *arg`). Inside `worker_thread`, `*(int *)arg` casts the generic `void *` pointer back to an `int *` and dereferences it to copy the integer `1`. `pthread_self()` returns the POSIX thread library's handle/ID for the thread, which is distinct from the underlying Linux kernel thread/task ID (TID).\n(b) `pthread_join` forces the main thread to wait until `thread` terminates. If omitted, `main()` can print `\"Worker completed.\"` and return from `main()`, which calls `exit()` and terminates the entire process before `worker_thread` even runs.\n(c) In Python, the Global Interpreter Lock (GIL) prevents multiple threads from executing Python bytecode in parallel on multiple CPU cores (making `multiprocessing` better for CPU-bound work), whereas I/O-bound threads release the GIL during I/O waits and overlap effectively. A Thread Pool provides 4 key benefits: (1) avoids repeated thread creation/destruction overhead, (2) bounds maximum resource consumption, (3) queues excess tasks when all workers are busy, and (4) centralizes thread lifecycle and error management."
      },
      {
        id: "e2_q15",
        part: "Part C — Deep-Dive Traces & Explanations",
        type: "frq",
        points: 14,
        chapter: "Ch 1 & Ch 2",
        slideRef: "Ch 1 Slides 50–58 & Ch 2 Slides 38–43",
        question: "Architecture & IPC Design Trade-offs:\n(a) Compare Monolithic, Microkernel, Modular, and Hybrid kernel architectures across the 5 engineering dimensions on Ch 1 Slide 57 (Performance, Reliability, Security/TCB, Maintainability, Compatibility).\n(b) Compare Shared-Memory IPC vs. Message-Passing IPC, and state the exact use case and key limitation for each of the 4 IPC mechanisms on Ch 2 Slide 40 (Unnamed Pipe, Named Pipe/FIFO, Signal, Socket).",
        rubric: [
          "Contrasts Monolithic (direct function calls in kernel space -> high performance, large TCB, 1 driver bug crashes OS) vs Microkernel (only IPC/scheduling/basic memory in kernel, servers in user space -> small TCB, high reliability/fault containment, higher IPC/boundary-crossing overhead).",
          "Contrasts Modular (Linux dynamic loadable modules in kernel space -> maintainable/flexible, not isolated) vs Hybrid (Windows NT, macOS XNU -> keeps performance-critical services in kernel space with microkernel-inspired structure/isolation for compatibility).",
          "Contrasts Shared Memory (processes map common RAM region -> very fast after setup without kernel intervention per access, but requires explicit synchronization like mutexes/semaphores) vs Message Passing (kernel-mediated send/receive -> strong isolation and works across machines, higher syscall/copy overhead).",
          "Accurately details the 4 IPC mechanisms: (1) Unnamed pipe: related parent-child processes, fd[0]=read, fd[1]=write, unstructured byte stream; (2) Named pipe (FIFO): unrelated local processes via filesystem path; (3) Signal: small asynchronous event notification, carries minimal data and handlers have strict safety limits; (4) Socket: bidirectional endpoint for local (Unix-domain) or network peers."
        ],
        sampleAnswer: "(a) Performance favors Monolithic kernels (direct procedure calls in shared kernel space avoid mode switches and IPC copies). Reliability and Security favor Microkernels (MINIX 3, QNX, seL4), which shrink the Trusted Computing Base (TCB) to just scheduling, basic memory, and IPC while isolating file systems, networking, and drivers in user-space servers—at the cost of client-server message-passing overhead. Maintainability favors Layered or Modular kernels (Linux kernel modules can be loaded/unloaded dynamically, though modules still run in kernel space without fault isolation). Compatibility drives Hybrid kernels (Windows NT, macOS XNU), combining monolithic speed for critical subsystems with microkernel-style message interfaces and selective isolation to preserve legacy APIs and drivers.\n(b) Shared-memory IPC maps a shared region into multiple processes' virtual address spaces (very fast after setup since loads/stores bypass the kernel, but requires explicit synchronization to prevent race conditions). Message-passing IPC transfers messages via the kernel (strong isolation across protection boundaries and networks, at the cost of system calls and data copying). Among the 4 mechanisms: (1) Unnamed pipe connects related processes (`fd[0]` read, `fd[1]` write) as a raw byte stream without message boundaries; (2) Named pipe (FIFO) connects unrelated local processes via a filesystem entry; (3) Signal delivers a tiny asynchronous event notice (not suitable for bulk data; handlers must be async-signal-safe); (4) Socket provides a bidirectional endpoint across both local (Unix-domain) and remote network peers."
      }
    ]
  },
  {
    id: "exam3",
    title: "Practice Exam 3: CPU Scheduling, Gantt Charts & Quantitative Mastery",
    subtitle: "Intensive workout exam covering every quantitative scheduling algorithm, priority convention, tie-breaker, and trace from Chapter 2.",
    badge: "100% Math & Traces • 100 Pts",
    timeMinutes: 75,
    questions: [
      {
        id: "e3_q1",
        part: "Part A — FCFS, SJF & SRTF Comparison on Identical Workload",
        type: "numeric_multi",
        points: 15,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 109, 112–113",
        question: "Standard Slide Workload — FCFS vs. Non-Preemptive SJF vs. Preemptive SRTF:\nConsider the 4-process workload from Ch 2 Slides 109 & 112:\n• $P_1$: Arrival = $0$, Burst = $8$\n• $P_2$: Arrival = $1$, Burst = $4$\n• $P_3$: Arrival = $2$, Burst = $2$\n• $P_4$: Arrival = $3$, Burst = $1$\n\nCalculate the exact metrics for **FCFS**, **Non-Preemptive SJF**, and **Preemptive SRTF**:",
        fields: [
          { label: "FCFS: Average Waiting Time", answer: 7 },
          { label: "FCFS: Average Turnaround Time", answer: 10.75 },
          { label: "Non-Preemptive SJF: P4 Completion Time (CT)", answer: 9 },
          { label: "Non-Preemptive SJF: P2 Completion Time (CT)", answer: 15 },
          { label: "Non-Preemptive SJF: Average Waiting Time", answer: 4 },
          { label: "Preemptive SRTF: P1 Completion Time (CT)", answer: 15 }
        ],
        explanation: "Let's trace all three on P1(0,8), P2(1,4), P3(2,2), P4(3,1):\n1. FCFS (Ch 2 Slide 113): Runs P1(0–8) -> P2(8–12) -> P3(12–14) -> P4(14–15).\n   • WT: P1=0, P2=8-1=7, P3=12-2=10, P4=14-3=11. Avg WT = (0+7+10+11)/4 = 28/4 = 7.\n   • TAT: P1=8, P2=11, P3=12, P4=12. Avg TAT = 43/4 = 10.75.\n2. Non-Preemptive SJF: P1 starts at 0 and runs non-preemptively 0–8. By t=8, P2(4), P3(2), and P4(1) are all waiting! Shortest burst is P4(1): runs 8–9 (CT=9). Next is P3(2): runs 9–11 (CT=11). Last is P2(4): runs 11–15 (CT=15).\n   • WT: P1=0, P4=8-3=5, P3=9-2=7, P2=11-1=10. Avg WT = (0+10+7+5)/4 = 22/4 = 5.5? Wait—let's check! Wait: P1 WT=0, P4 WT=8-3=5, P3 WT=9-2=7, P2 WT=11-1=10 -> sum = 22, 22/4 = 5.5! Let's check SRTF WT: In Preemptive SRTF: 0–1 P1(rem 7) | 1–2 P2(rem 3) | 2–3 P3(rem 1) | at t=3 P4 arrives with burst 1, tied with P3's rem 1 -> P3 finishes 3–4 (CT=4), P4 runs 4–5 (CT=5), P2 runs 5–8 (CT=8), P1 runs 8–15 (CT=15). Under SRTF: WT for P1=15-0-8=7, P2=8-1-4=3, P3=4-2-2=0, P4=5-3-1=1 -> Sum = 11, Avg WT = 2.75!"
      },
      {
        id: "e3_q2",
        part: "Part A — SJF vs. SRTF Slide Trace (Ch 2 Slides 115 & 117)",
        type: "numeric_multi",
        points: 12,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 115 & 117",
        question: "Exact Slide Trace — SJF vs. SRTF (Ch 2 Slides 115 & 117):\nThree processes need to be scheduled:\n• $p_1$: arrives at $t = 0$, CPU burst = $6$\n• $p_2$: arrives at $t = 1$, CPU burst = $3$\n• $p_3$: arrives at $t = 3$, CPU burst = $2$\n\nCompare their execution under **Non-Preemptive SJF** (Slide 115) vs. **Preemptive SRTF** (Slide 117):",
        fields: [
          { label: "SJF (Non-preemptive): p3 Completion Time", answer: 8 },
          { label: "SJF (Non-preemptive): p2 Completion Time", answer: 11 },
          { label: "SRTF (Preemptive): p2 Completion Time", answer: 4 },
          { label: "SRTF (Preemptive): p3 Completion Time", answer: 6 },
          { label: "SRTF (Preemptive): p1 Completion Time", answer: 11 },
          { label: "SRTF (Preemptive): Average Waiting Time", answer: 2 }
        ],
        explanation: "From Ch 2 Slides 115 & 117 Speaker Notes:\n• Under Non-Preemptive SJF (Slide 115): p1 starts at t=0 and runs 0–6. At t=6, both p2(burst 3) and p3(burst 2) are ready; p3 is shorter so p3 runs 6–8 (CT=8), and p2 runs 8–11 (CT=11).\n• Under Preemptive SRTF (Slide 117): p1 starts at t=0 and runs 0–1 (rem 5). At t=1, p2 arrives with burst 3 < 5, so p2 preempts p1 and runs. At t=3, p3 arrives with burst 2, while p2 has only 1 unit remaining (1 < 2), so p2 continues and finishes at t=4 (CT=4)! At t=4, p3 (rem 2) < p1 (rem 5), so p3 runs 4–6 (CT=6). Finally p1 runs 6–11 (CT=11).\n• SRTF Waiting Times: p1 = 11 - 0 - 6 = 5; p2 = 4 - 1 - 3 = 0; p3 = 6 - 3 - 2 = 1. Average WT = (5 + 0 + 1)/3 = 2."
      },
      {
        id: "e3_q3",
        part: "Part B — Preemptive & Non-Preemptive Priority Workouts",
        type: "numeric_multi",
        points: 15,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 100–101 (Preemptive Priority)",
        question: "Preemptive Priority Scheduling Workout (Ch 2 Slides 100–101):\nGiven (where **Higher number = Higher priority** and scheduling is **Preemptive**):\n• $P_1$: Arrival = $0$, Burst = $8$, Priority = $2$\n• $P_2$: Arrival = $1$, Burst = $4$, Priority = $4$\n• $P_3$: Arrival = $2$, Burst = $2$, Priority = $6$\n• $P_4$: Arrival = $3$, Burst = $1$, Priority = $3$\n\nTrace the execution and find the exact completion and waiting times:",
        fields: [
          { label: "P3 Completion Time (CT)", answer: 4 },
          { label: "P2 Completion Time (CT)", answer: 7 },
          { label: "P4 Completion Time (CT)", answer: 8 },
          { label: "P1 Completion Time (CT)", answer: 15 },
          { label: "P1 Waiting Time (WT)", answer: 7 },
          { label: "P2 Waiting Time (WT)", answer: 2 }
        ],
        explanation: "From Ch 2 Slide 101 Step-by-Step Execution:\n• t=0: P1 (prio 2) runs 0–1 (rem 7).\n• t=1: P2 (prio 4 > 2) arrives, preempts P1, and runs 1–2 (rem 3).\n• t=2: P3 (prio 6 > 4) arrives, preempts P2, and runs 2–4.\n• t=3: P4 (prio 3 < 6) arrives; no preemption.\n• t=4: P3 finishes (CT=4). Highest ready priority is P2 (prio 4), which resumes 4–7 and finishes (CT=7).\n• t=7: Highest ready priority is P4 (prio 3), which runs 7–8 and finishes (CT=8).\n• t=8: Only P1 (prio 2) remains; P1 runs 8–15 and finishes (CT=15).\n• Waiting times: P1 = 15 - 0 - 8 = 7; P2 = 7 - 1 - 4 = 2; P3 = 4 - 2 - 2 = 0; P4 = 8 - 3 - 1 = 4."
      },
      {
        id: "e3_q4",
        part: "Part B — Preemptive & Non-Preemptive Priority Workouts",
        type: "numeric_multi",
        points: 12,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 102–103 (Non-Preemptive Priority)",
        question: "Non-Preemptive Priority Scheduling Workout (Ch 2 Slides 102–103):\nGiven (where **Higher number = Higher priority** and scheduling is **Non-Preemptive**):\n• $P_1$: Arrival = $0$, Burst = $6$, Priority = $2$\n• $P_2$: Arrival = $1$, Burst = $4$, Priority = $5$\n• $P_3$: Arrival = $2$, Burst = $2$, Priority = $3$\n\nCompute the completion and waiting times:",
        fields: [
          { label: "P1 Completion Time (CT)", answer: 6 },
          { label: "P2 Completion Time (CT)", answer: 10 },
          { label: "P3 Completion Time (CT)", answer: 12 },
          { label: "P1 Waiting Time (WT)", answer: 0 },
          { label: "P2 Waiting Time (WT)", answer: 5 },
          { label: "P3 Waiting Time (WT)", answer: 8 }
        ],
        explanation: "From Ch 2 Slide 103 Solution Outline:\n• t=0: Only P1 is available, so P1 runs non-preemptively 0–6 (CT=6, WT=0).\n• t=6: Both P2 (prio 5) and P3 (prio 3) have arrived. P2 has higher priority (5 > 3), so P2 runs 6–10 (CT=10, WT = 6 - 1 = 5).\n• t=10: P3 runs 10–12 (CT=12, WT = 10 - 2 = 8).\n• Average Waiting Time = (0 + 5 + 8) / 3 = 13 / 3 = 4.33."
      },
      {
        id: "e3_q5",
        part: "Part C — 3-Level MLFQ & Response/Waiting Time Workouts",
        type: "numeric_multi",
        points: 15,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 137–138 (3-Level MLFQ Problem)",
        question: "3-Level Multilevel Feedback Queue (MLFQ) Workout (Ch 2 Slides 137–138):\nA system uses 3-level MLFQ ($Q_0 > Q_1 > Q_2$):\n• $Q_0$: Round Robin, time quantum = $2\\text{ ms}$\n• $Q_1$: Round Robin, time quantum = $4\\text{ ms}$\n• $Q_2$: FCFS\n\nProcesses:\n• $P_1$: Arrival = $0\\text{ ms}$, Burst = $10\\text{ ms}$\n• $P_2$: Arrival = $1\\text{ ms}$, Burst = $4\\text{ ms}$\n• $P_3$: Arrival = $2\\text{ ms}$, Burst = $6\\text{ ms}$\n\nTrace the queue movements and determine the exact values:",
        fields: [
          { label: "P2 Completion Time (CT in ms)", answer: 12 },
          { label: "P3 Completion Time (CT in ms)", answer: 16 },
          { label: "P1 Completion Time (CT in ms)", answer: 20 },
          { label: "Queue number where P2 finishes (0, 1, or 2)", answer: 1 },
          { label: "Queue number where P3 finishes (0, 1, or 2)", answer: 1 },
          { label: "Queue number where P1 finishes (0, 1, or 2)", answer: 2 }
        ],
        explanation: "From Ch 2 Slide 138 Answer & Speaker Notes:\n• In Q0 (quantum = 2 ms):\n  - t=0–2: P1 runs in Q0 for 2 ms (rem 8 -> moves to Q1). Note: P2 arrives at t=1 in Q0, but does NOT interrupt P1 since both are in Q0!\n  - t=2–4: P2 runs in Q0 for 2 ms (rem 2 -> moves to Q1).\n  - t=4–6: P3 runs in Q0 for 2 ms (rem 4 -> moves to Q1).\n• Now Q0 is empty, so run Q1 (quantum = 4 ms):\n  - t=6–10: P1 runs in Q1 for 4 ms (rem 4 -> moves to Q2).\n  - t=10–12: P2 runs in Q1 for 2 ms and finishes at t=12 in Q1!\n  - t=12–16: P3 runs in Q1 for 4 ms and finishes at t=16 in Q1! (Speaker note: P3 finishes at the exact end of its Q1 quantum, so it exits rather than moving to Q2.)\n• Now Q1 is empty, so run Q2 (FCFS):\n  - t=16–20: P1 runs in Q2 for 4 ms and finishes at t=20 in Q2."
      },
      {
        id: "e3_q6",
        part: "Part C — 3-Level MLFQ & Response/Waiting Time Workouts",
        type: "numeric_multi",
        points: 12,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slide 98 & Slide 118",
        question: "Response Time, Waiting Time, Turnaround Time & Priority Aging (Ch 2 Slides 98 & 118):\nPart 1 (Slide 98): Process $A$ arrives at $0\\text{ ms}$, waits until $2\\text{ ms}$, first runs from $2\\text{--}5\\text{ ms}$, gets preempted and waits in the Ready queue from $5\\text{--}9\\text{ ms}$, and finally runs from $9\\text{--}12\\text{ ms}$ and finishes.\nPart 2 (Slide 118): In a priority system where priorities range from $0$ (lowest) to $10$ (highest), a process starts at $t=0$ with priority $2$, and Aging increases its priority by $+1$ for every $5$ time units it waits in the ready queue.\n\nCompute:",
        fields: [
          { label: "Process A Response Time (ms)", answer: 2 },
          { label: "Process A Total Waiting Time (ms)", answer: 6 },
          { label: "Process A Turnaround Time (ms)", answer: 12 },
          { label: "Part 2: Priority of the waiting process after waiting 20 time units", answer: 6 }
        ],
        explanation: "From Ch 2 Slide 98 & Slide 118:\n• Process A Response Time = First CPU start - Arrival = 2 - 0 = 2 ms.\n• Process A Waiting Time = Initial wait (2 - 0 = 2 ms) + later wait (9 - 5 = 4 ms) = 6 ms (or TAT 12 - Burst 6 = 6 ms).\n• Process A Turnaround Time = Completion - Arrival = 12 - 0 = 12 ms.\n• Aging (Slide 118): Starting at priority 2, waiting 20 time units adds 20 / 5 = +4 to its priority, reaching priority 2 + 4 = 6."
      },
      {
        id: "e3_q7",
        part: "Part D — Project 1 & Idle-Interval Scheduling Workout",
        type: "numeric_multi",
        points: 19,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 96–97 & Project 1 Spec (Idle CPU & Utilization)",
        question: "Scheduling with Staggered Arrivals, Idle CPU Interval & CPU Utilization:\nConsider three processes on a single CPU:\n• $P_1$: Arrival = $0\\text{ ms}$, Burst = $3\\text{ ms}$\n• $P_2$: Arrival = $5\\text{ ms}$, Burst = $4\\text{ ms}$\n• $P_3$: Arrival = $6\\text{ ms}$, Burst = $2\\text{ ms}$\n\nRun **Non-Preemptive SJF** from $t = 0$ through final completion (note the idle CPU interval when the Ready queue is empty!) and compute:",
        fields: [
          { label: "Duration of the CPU IDLE interval (in ms)", answer: 2 },
          { label: "P2 Completion Time (CT in ms)", answer: 9 },
          { label: "P3 Completion Time (CT in ms)", answer: 11 },
          { label: "P3 Waiting Time (WT in ms)", answer: 3 },
          { label: "Total Elapsed Simulation Time from t=0 (in ms)", answer: 11 },
          { label: "Total CPU Busy Time (in ms)", answer: 9 }
        ],
        explanation: "Step-by-step trace:\n• t=0–3: P1 arrives at 0 and runs 0–3 (CT=3, TAT=3, WT=0).\n• t=3–5: Ready queue is empty because P2 does not arrive until t=5! The CPU is IDLE for 5 - 3 = 2 ms.\n• t=5–9: P2 arrives at t=5 and starts running non-preemptively from 5–9 (CT=9, TAT=4, WT=0).\n• t=9–11: P3 arrived at t=6 and waited from 6–9 (WT = 9 - 6 = 3 ms), then runs 9–11 (CT=11, TAT=5).\n• Total CPU Busy Time = 3 + 4 + 2 = 9 ms out of Total Elapsed Time = 11 ms (CPU Utilization = 9/11 * 100 = 81.82%)."
      }
    ]
  },
  {
    id: "exam4",
    title: "Practice Exam 4: Complete Chapter 3 Concurrency & Synchronization (Sections 3.1 – 3.8)",
    subtitle: "Covers all 114 slides of Chapter 3 (Foundations, Critical Sections, Peterson's, Hardware Atomics, Semaphores, Monitors, Classical Problems, & Amdahl's Law).",
    badge: "Full Chapter 3 Deck • 100 Pts",
    timeMinutes: 75,
    questions: [
      {
        id: "e4_q1",
        part: "Part A — Race Conditions, Critical Sections & Software Solutions",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 23, 31–32 (+ Speaker Notes)",
        question: "How do Ch 3 Slides 23 & 31–32 distinguish a **Data Race** from a **Race Condition**, and why is `if (seats > 0) seats = seats - 1;` unsafe even if each individual read and write of `seats` is atomic?",
        options: [
          "A data race and a race condition are identical; making `seats` an atomic integer automatically makes the `if` check and decrement indivisible.",
          "A data race is unsynchronized conflicting memory accesses (at least one write) causing undefined behavior in C/C++, whereas a race condition is the broader correctness bug where outcome depends on uncontrolled event ordering; even with atomic reads/writes, two threads can both observe `seats == 1` in the check-then-act gap and both decrement it to `0` and `-1`.",
          "A race condition only occurs on multicore processors, whereas a data race only occurs on single-core processors.",
          "Adding the C `volatile` keyword to `seats` makes the check-then-act sequence atomic."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 23 & 31–32 (+ Speaker Notes): 'A data race is a memory-model violation [unsynchronized conflicting memory accesses where >=1 writes; undefined behavior in C/C++]. A race condition is the broader correctness problem.' Even if each read and write of `seats` is atomic, a check-then-act sequence (`if (seats > 0) seats--`) allows two threads to both read `seats == 1` before either updates it, violating the capacity invariant unless the entire check-and-update is protected by one mutex or a compare-and-swap loop."
      },
      {
        id: "e4_q2",
        part: "Part A — Race Conditions, Critical Sections & Software Solutions",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 27–28",
        question: "Which statement accurately defines the three correctness requirements for a critical-section solution (Mutual Exclusion, Progress, and Bounded Waiting)?",
        options: [
          "Mutual exclusion is a liveness property, while progress and bounded waiting are safety properties.",
          "Mutual exclusion (safety) guarantees at most one thread is inside the critical section; Progress (liveness) guarantees that a thread in its remainder section cannot prevent interested threads from entering and selection cannot be postponed indefinitely; Bounded waiting (liveness) guarantees a bound on how many times other threads may overtake a waiting requester.",
          "Progress alone guarantees that no individual waiting thread can ever starve.",
          "Bounded waiting guarantees a hard real-time millisecond bound regardless of OS scheduling."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 27–28 (+ Speaker Notes): Mutual exclusion addresses safety (at most one participant in CS). Progress and bounded waiting address liveness. Slide 28 notes: 'Progress alone can allow one unlucky thread to starve' (a system can keep making progress while one thread is repeatedly overtaken), and speaker notes clarify that bounded waiting counts overtaking entries, not necessarily elapsed milliseconds."
      },
      {
        id: "e4_q3",
        part: "Part A — Race Conditions, Critical Sections & Software Solutions",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 29–30 (+ Speaker Notes)",
        question: "Compare **Thread-Safe** code with **Reentrant** code (Ch 3 Slides 29–30). Why does a function using a `static char scratch[80]` buffer protected by a nonrecursive internal mutex fail to be reentrant?",
        options: [
          "Because `static` arrays are stored on the thread's private stack.",
          "A function with a nonrecursive internal mutex is thread-safe for concurrent calls from different threads, but if an invocation is interrupted (e.g., by a signal handler or callback on the same thread) and re-entered before the first call finishes, attempting to lock the same nonrecursive mutex deadlocks; reentrant code uses per-call state (such as a caller-provided buffer).",
          "Thread-safe individual methods on a queue automatically make `if (!q.empty()) q.pop()` atomic.",
          "Reentrancy is identical to POSIX async-signal safety in every case."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 29–30 (+ Speaker Notes): Thread-safe code satisfies its contract across concurrent calls (often using internal locks), whereas reentrant code allows a new invocation to run before an earlier invocation finishes (using per-call state like a caller-provided buffer `char *out`). Slide 29 notes: 'A nonrecursive internal mutex can deadlock if an interrupting call reenters the function.' Speaker notes also clarify that reentrancy is not synonymous with POSIX async-signal safety."
      },
      {
        id: "e4_q4",
        part: "Part A — Race Conditions, Critical Sections & Software Solutions",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 34–43",
        question: "Evaluate the three software synchronization protocols from Section 3.3: (1) Single shared boolean flag (`while (locked); locked = true;`), (2) Strict alternation (`while (turn != i); ... turn = j;`), and (3) Peterson's two-thread algorithm (`flag[i] = true; turn = j; while (flag[j] && turn == j);`). Which evaluation is completely accurate?",
        options: [
          "Single flag fails Progress; Strict alternation fails Mutual Exclusion; Peterson's fails Bounded Waiting.",
          "Single flag fails Mutual Exclusion (both can read `false` and enter); Strict alternation satisfies Mutual Exclusion but fails Progress (an uninterested thread in its remainder section blocks the other); Peterson's satisfies Mutual Exclusion, Progress, and Bounded Waiting (at most 1 overtake) under sequential consistency, though ordinary C/C++ `volatile` variables do NOT make it safe on modern reordering hardware.",
          "In Peterson's algorithm, if both `flag[0]` and `flag[1]` are `true` and `turn == 1`, Thread 0 enters the critical section first.",
          "Declaring `flag` and `turn` as `volatile` in C guarantees sequential consistency and prevents hardware store-buffer reordering."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 34–43 Table & Q/A: (1) Separate test and set of `locked` fails Mutual Exclusion. (2) Strict alternation (`turn`) satisfies Mutual Exclusion but fails Progress when the other thread is idle in its remainder section. (3) Peterson's satisfies all three under atomic reads/writes and sequential consistency (when `flag[0] && flag[1]` and `turn == 1`, Thread 1 enters while Thread 0 waits until Thread 1 clears `flag[1]`). Slide 40 & 43 emphasize: C/C++ `volatile` does NOT provide interthread synchronization or memory barriers!"
      },
      {
        id: "e4_q5",
        part: "Part B — Hardware Primitives, Semaphores & Monitors",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 45–55",
        question: "Regarding hardware synchronization support (Section 3.4: Interrupt Disabling, `test_and_set`, `CAS`, `atomic_swap`, Memory Barriers, and Spinlocks), which statement is TRUE?",
        options: [
          "Masking local interrupts on one CPU core prevents all other CPU cores from accessing shared memory.",
          "If a lock `L` is initially `false` and two threads call atomic `test_and_set(&L)` concurrently, only the first call returns `false` (acquiring the lock); however, the winning thread CAN still be preempted inside its critical section, and the losing spinning thread does NOT have a bounded-waiting guarantee.",
          "A memory fence/barrier by itself provides mutual exclusion without needing atomic operations or locks.",
          "Spinlocks are ideal when a thread must wait for a slow disk I/O operation on a single-core CPU."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 45–55 (especially Slide 54–55 Q&A): (1) Local interrupt masking does NOT stop other cores in a multiprocessor system. (2) In `test_and_set(&L)`, only the first caller sees `false`, but atomic lock acquisition does NOT disable preemption during the critical section, and a simple spinlock has no FIFO/bounded-waiting guarantee. (3) Spinlocks should only be used for very short waits on multicore systems where the owner is running on another core."
      },
      {
        id: "e4_q6",
        part: "Part B — Hardware Primitives, Semaphores & Monitors",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 51, 63, 66–67",
        question: "Consider (i) Release/Acquire publication (`data = 42; ready.store(true, release);` paired with `while (!ready.load(acquire)); use(data);`), (ii) a blocking semaphore's internal `park_and_unlock(S.internal)`, and (iii) semaphore initialization values (Slides 66–67). Which statement is accurate?",
        options: [
          "Initialize a semaphore to `0` for mutual exclusion, `1` for a 4-connection pool, and `4` for waiting until initialization finishes.",
          "Initialize a semaphore to `1` for mutual exclusion, `4` for a pool of 4 available connections, and `0` for 'wait until initialization has finished'; `park_and_unlock` atomically coordinates queueing and sleeping so a `signal()` cannot be lost between enqueue and sleep; and an `acquire` load that observes a `release` store guarantees visibility of `data = 42`.",
          "A mutex and a binary semaphore have identical ownership rules: any thread is allowed to unlock a mutex owned by another thread.",
          "If `signal(S)` is called on a semaphore when no thread is waiting, the signal is discarded and the permit count stays unchanged."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 51, 59, 63, 66–67: (1) Release/acquire establishes a happens-before visibility ordering for `data = 42`. (2) `park_and_unlock` prevents a lost wakeup between adding a waiter to the semaphore queue and putting the thread to sleep. (3) Semaphore initial values (Slide 67): `1` for mutual exclusion, `4` for 4 available connections, and `0` for waiting on a completion event (`done`). Unlike a condition variable, a semaphore `signal(S)` with no waiter increments the permit count!"
      },
      {
        id: "e4_q7",
        part: "Part B — Hardware Primitives, Semaphores & Monitors",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 69–76 & 107–108",
        question: "Why must a thread waiting on a condition variable almost always check the state predicate in a `while` loop (`lock(m); while (!predicate()) wait(cv, m);`) rather than an `if` statement?",
        options: [
          "Because `wait(cv, m)` does not release the mutex `m` while the thread is sleeping.",
          "Because under Mesa-style monitor semantics (used by POSIX `pthread_cond_wait`), `signal(cv)` only makes the waiter eligible to run; another thread (e.g., consumer $C_2$) can acquire the mutex first and falsify the predicate before the awakened waiter ($C_1$) reacquires `m`, or a spurious wakeup can occur.",
          "Because `signal(cv)` stores a permanent permit inside the condition variable that must be decremented twice.",
          "Because Hoare-style monitors are used by C/POSIX and require busy waiting."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 70–76 & 107–108: Under Mesa semantics (Slide 72–73), the signaler continues and the signaled waiter must compete to reacquire the mutex `m`. Between `signal(cv)` and when Consumer C1 reacquires `m`, another thread C2 can acquire `m` and remove the item (making `count == 0` again), or a spurious wakeup can occur. Note also (Slide 75–76) that if a producer sets `ready = true` and signals BEFORE the consumer arrives, the consumer sees `ready == true` in `while (!ready)` and safely skips `wait(cv, m)` without blocking forever!"
      },
      {
        id: "e4_q8",
        part: "Part C — Classical Synchronization Problems & Practical Concurrency",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 80–82 & 94–95",
        question: "In the Semaphore Bounded-Buffer solution (`empty = N`, `full = 0`, `mutex = 1`), what happens if (Bug A, Slide 82) the consumer reverses its waits to `wait(mutex); wait(full);` when the buffer is empty, OR if (Bug B, Slide 94) the semaphores are initialized to `empty = 4, full = 1, mutex = 1` when the buffer is actually empty?",
        options: [
          "Both Bug A and Bug B improve throughput without affecting correctness.",
          "In Bug A, the consumer holds `mutex` while blocked on `full`, causing a deadlock because no producer can acquire `mutex` to insert an item and `signal(full)`; in Bug B, a consumer can immediately pass `wait(full)` and attempt to remove nonexistent data from an empty buffer.",
          "In Bug A, two consumers enter the critical section simultaneously; in Bug B, producers block forever.",
          "Reversing `wait(empty)` and `wait(mutex)` in the producer is harmless even when the buffer is full."
        ],
        correct: 1,
        explanation: "Ch 3 Slide 82 & Slides 94–95: Always wait for availability (`wait(full)` or `wait(empty)`) BEFORE acquiring `mutex`! Holding `mutex` while blocking on `full` (when empty) or `empty` (when full) deadlocks with the opposite role. And initializing `full = 1` when the buffer is empty (Slide 95) lets a consumer pass `wait(full)` and remove nonexistent data."
      },
      {
        id: "e4_q9",
        part: "Part C — Classical Synchronization Problems & Practical Concurrency",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 84–92",
        question: "Which statement accurately describes the Readers–Writers, Dining Philosophers, and Sleeping Barber protocols in Section 3.7?",
        options: [
          "In Reader-Preference Readers–Writers, `room` can be an ordinary owner-tracked mutex because the same reader thread always locks and unlocks `room`.",
          "In Reader-Preference Readers–Writers, the first reader (`readers == 1`) calls `wait(room)` and the last reader (`readers == 0`) calls `signal(room)` (so `room` must be a semaphore, not an owner mutex, and writers can starve if readers keep arriving); in Dining Philosophers, circular deadlock can be prevented by acquiring the lower-numbered utensil first, limiting admission to $\\le 4$ philosophers, or using a monitor waiter.",
          "In Dining Philosophers, avoiding deadlock automatically guarantees starvation freedom for every philosopher.",
          "In the Sleeping Barber problem, a single shared semaphore is sufficient without a FIFO queue or per-customer handshakes (`called, seated, done, left`)."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 85–92 (+ Speaker Notes): (1) In Readers-Writers, the first reader acquires `room` and the last reader releases `room`. Because those can be different threads, `room` must be a semaphore, not an owner-enforced mutex! And reader preference can starve writers unless a turnstile/fair queue is used. (2) In Dining Philosophers (Slide 89), deadlock is avoided by global resource ordering (lower fork first), limiting admission to N-1 = 4, or a central monitor—and Slide 89 explicitly notes: 'Avoiding deadlock does not automatically prevent starvation.' (3) Sleeping Barber (Slides 91–92) uses a mutex-protected FIFO queue (capacity W) plus 4 per-customer handshake semaphores (`called`, `seated`, `done`, `left`)."
      },
      {
        id: "e4_q10",
        part: "Part C — Classical Synchronization Problems & Practical Concurrency",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 98–104",
        question: "In Section 3.8 ('Practical Concurrent Programming'), how do you prevent deadlock when transferring funds between two accounts, what is **false sharing**, and what does a clean run of **ThreadSanitizer** (`-fsanitize=thread`) prove?",
        options: [
          "Acquire locks in random order; false sharing is when two threads share a mutex; ThreadSanitizer proves mathematically that no race condition can ever happen.",
          "Acquire account locks in a consistent global order (e.g., `lower_unique_id(a, b)` first, then `higher_unique_id(a, b)`); false sharing occurs when independent writable variables Used by different cores reside on the same hardware cache line; and a clean ThreadSanitizer run only checks the executed path—it does NOT prove every possible schedule is race-free.",
          "Always use a single global lock for the entire operating system; false sharing only occurs on single-core CPUs.",
          "Adding `sleep(1)` repairs race conditions in production code."
        ],
        correct: 1,
        explanation: "Ch 3 Slides 98, 102, 103, 104: (1) Consistent global lock ordering (`lower_unique_id` before `higher_unique_id`) prevents lock-order cycles. (2) False sharing (Slide 104) is when independent writable data share a single hardware cache line, causing cache-coherence ping-ponging across cores. (3) Slide 102–103: 'A clean run [of ThreadSanitizer] does not prove that every possible execution is race-free... sleep() may expose a bug during a test, but it does not repair synchronization.'"
      },
      {
        id: "e4_q11",
        part: "Part D — Quantitative Concurrency & Synchronization Workouts",
        type: "numeric_multi",
        points: 15,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 61, 81, & 105",
        question: "Semaphores, Bounded Buffer Trace & Amdahl's Law Calculations (Ch 3 Slides 61, 81, 105):\n• Part 1 (Counting Semaphore, Slide 61): Semaphore $S$ is initialized to $3$. Thread A calls `wait(S)`, Thread B calls `wait(S)`, Thread C calls `wait(S)`, and Thread D calls `wait(S)` (blocking). Then Thread B calls `signal(S)`, handing the permit to D.\n• Part 2 (Bounded Buffer Capacity $N=2$, Slide 81): Initially `empty = 2`, `full = 0`. Producer inserts $A$, then inserts $B$. Next, Producer calls `wait(empty)` to reserve space for $C$ (blocking). Then Consumer removes $A$ and calls `signal(empty)` (handing the space permit to the blocked Producer before $C$ finishes inserting).\n• Part 3 (Amdahl's Law, Slide 105): A workload has a serial fraction $s = 0.20$ ($20\\%$) and runs on $p = 4$ processors.\n\nEnter the exact numeric values:",
        fields: [
          { label: "Part 1: Available permits in S after A, B, and C call wait(S)", answer: 0 },
          { label: "Part 2: Value of 'full' after Producer inserts both A and B", answer: 2 },
          { label: "Part 2: Value of 'full' right after Consumer removes A (before C finishes inserting)", answer: 1 },
          { label: "Part 3: Ideal Amdahl's Law speedup for s = 0.20 and p = 4", answer: 2.5 },
          { label: "Part 3: Maximum possible speedup limit as p -> infinity for s = 0.20", answer: 5 }
        ],
        explanation: "From Ch 3 Slides 61, 81, & 105:\n• Part 1 (Slide 61): S starts at 3. After A, B, and C each consume a permit, available permits = 0 (and D blocks).\n• Part 2 (Slide 81 & Speaker Notes): For capacity N=2, after inserting A and B, `empty = 0` and `full = 2`. When Consumer removes A, `full` drops to 1, and its `signal(empty)` hands the space permit directly to the blocked Producer (so available `empty` remains 0 during the in-flight insertion until C finishes inserting, when `full` becomes 2 again).\n• Part 3 (Slide 105): Amdahl's Law Speedup = 1 / (s + (1 - s)/p) = 1 / (0.20 + 0.80 / 4) = 1 / (0.20 + 0.20) = 1 / 0.40 = 2.5. As p -> infinity, speedup approaches 1 / s = 1 / 0.20 = 5."
      },
      {
        id: "e4_q12",
        part: "Part D — Quantitative Concurrency & Synchronization Workouts",
        type: "frq",
        points: 20,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 107–110 (Code Review Activity & Chapter Review)",
        question: "Code Review Activity (Ch 3 Slides 107–108) & Chapter 3 Synthesis (Slides 109–110):\nConsider the flawed consumer code from Slide 107:\n```c\nlock(m);\nif (queue.empty()) {\n    wait(not_empty, m);\n}\nitem = queue.pop();\nunlock(m);\n```\n(a) Provide a concrete multi-thread execution trace (with Consumer $C_1$, Consumer $C_2$, and Producer $P$) showing how `item = queue.pop()` can fail even without a spurious wakeup.\n(b) Write the corrected code and state what rule the Producer must follow.\n(c) Answer the 4 Chapter Review questions from Slide 109:\n  1. Can mutual exclusion hold while a thread starves?\n  2. Does a condition-variable `signal` store a future permit?\n  3. Does an `atomic<long>` variable make a multi-step transaction atomic?\n  4. Does deadlock freedom imply fairness?",
        rubric: [
          "Traces the Mesa-semantics failure: (1) Queue is empty, C1 locks m, sees queue.empty() == true, and calls wait(not_empty, m) (releasing m and sleeping); (2) Producer locks m, pushes 1 item, signals not_empty, and unlocks m; (3) Another consumer C2 acquires m before C1, pops the item, and unlocks m (queue is empty again!); (4) C1 reacquires m, returns from the `if` block without rechecking queue.empty(), and calls queue.pop() on an empty queue!",
          "Replaces `if (queue.empty())` with `while (queue.empty()) { wait(not_empty, m); }` and states that producers must acquire the same mutex `m` when modifying the queue and `signal(not_empty)`.",
          "Correctly answers the 4 review questions: (1) Yes—safety (mutual exclusion) alone does not guarantee every thread eventually enters; (2) No—a condition variable signal does not store permits, the shared predicate holds state; (3) No—an atomic variable only makes single operations on that variable indivisible, not multi-step invariants; (4) No—a system can be deadlock-free while repeatedly overtaking/starving one request."
        ],
        sampleAnswer: "(a) Execution Trace: Initially `queue` is empty. Step 1: Consumer C1 acquires `m`, sees `queue.empty() == true`, and calls `wait(not_empty, m)`, which atomically releases `m` and puts C1 to sleep. Step 2: Producer P acquires `m`, inserts 1 item, calls `signal(not_empty)` (waking C1), and releases `m`. Step 3: Under Mesa semantics, Consumer C2 acquires `m` before C1 is scheduled, sees `queue.empty() == false`, pops the single item, and releases `m` (leaving the queue empty again). Step 4: C1 reacquires `m` and returns from `wait()`. Because an `if` statement was used instead of a `while` loop, C1 does not recheck `queue.empty()` and executes `queue.pop()` on an empty queue!\n(b) Fix: Change `if (queue.empty())` to `while (queue.empty()) { wait(not_empty, m); }`. Producers must acquire the same mutex `m` when inserting into the queue and then call `signal(not_empty)`.\n(c) Slide 110 Answers: 1. Yes (safety alone does not prevent starvation). 2. No (condition signals are lost if no thread is waiting; the shared predicate records state). 3. No (a multi-step transaction or multi-field invariant requires a lock or full protocol). 4. No (deadlock freedom does not prevent repeated overtaking/starvation)."
      }
    ]
  },
  {
    id: "exam5",
    title: "Practice Exam 5: Ultimate Cumulative Final Dress Rehearsal",
    subtitle: "High-intensity mixed simulation spanning Ch 1, Ch 2, and Ch 3 with homework/quiz cross-checks.",
    badge: "Cumulative Simulation • 100 Pts",
    timeMinutes: 75,
    questions: [
      {
        id: "e5_q1",
        part: "Part A — Rapid-Fire Conceptual Mastery",
        type: "mc",
        points: 5,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slide 30 (+ HW1 Q6)",
        question: "A user-mode application attempts to execute a CPU instruction that disables hardware interrupts directly. What happens and why?",
        options: [
          "The CPU disables interrupts for 10 ms and then automatically re-enables them.",
          "Disabling interrupts is a privileged instruction; attempting it in user mode causes the CPU hardware to generate a synchronous trap/exception, transition to kernel mode, and let the OS terminate the offending process or return an error—otherwise a user program could disable timer interrupts and monopolize the CPU forever.",
          "The C compiler converts the instruction into a no-op (`NOP`) at runtime.",
          "The instruction succeeds only if the process has Priority 0 in the Ready List."
        ],
        correct: 1,
        explanation: "Ch 1 Slide 30 (+ Speaker Notes & HW1 Q6): Interrupt control, I/O control, Memory control (page tables), and Processor control (halt/mode change) are the 4 categories of privileged instructions. Attempting one in user mode triggers a hardware exception/trap into kernel mode so the OS can terminate the offending program. If user programs could disable interrupts, they could block timer interrupts and prevent the OS scheduler from ever regaining control of the CPU."
      },
      {
        id: "e5_q2",
        part: "Part A — Rapid-Fire Conceptual Mastery",
        type: "mc",
        points: 5,
        chapter: "Ch 1",
        slideRef: "Ch 1, Slide 20 & 50",
        question: "Match each operating system to its primary default file system and kernel architecture according to Ch 1 Slides 20 & 50:",
        options: [
          "Windows 11: APFS & Microkernel; macOS: ext4 & Monolithic; Linux: NTFS & Hybrid.",
          "Windows 11: NTFS & Windows NT Hybrid Kernel; macOS: APFS & XNU Hybrid Kernel (Mach-influenced); Linux: ext4/Btrfs/XFS & Monolithic Modular Kernel; QNX / MINIX 3: Microkernel.",
          "Windows 11: ext4 & Layered Kernel; macOS: NTFS & Monolithic; Linux: APFS & Microkernel.",
          "All three (Windows 11, macOS, and Linux) use pure microkernels and the NTFS file system."
        ],
        correct: 1,
        explanation: "Ch 1 Slide 20 & Slide 50 tables explicitly list: Windows 11 -> NTFS, Windows NT hybrid kernel; macOS -> APFS, XNU hybrid kernel (influenced by Mach); Linux -> ext4, Btrfs, or XFS, Monolithic modular kernel; MINIX 3 & QNX -> Microkernel."
      },
      {
        id: "e5_q3",
        part: "Part A — Rapid-Fire Conceptual Mastery",
        type: "mc",
        points: 5,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 70–75",
        question: "In the context-switch timeline diagram between Process $p$ and Process $q$ (Ch 2 Slides 70–75 Speaker Notes), when Process $p$ is currently actively executing on the CPU, what is the status of the CPU state stored inside $p$'s PCB in kernel memory?",
        options: [
          "$p$'s PCB is updated by hardware on every single clock cycle so it is always identical to the live CPU registers.",
          "While $p$ is actively running, the current state of $p$ is in the CPU registers, while $p$'s PCB contains an out-of-date copy; $p$'s PCB is updated only when an interrupt/trap transfers control to the OS and saves the CPU state.",
          "$p$'s PCB is deleted while $p$ is running and recreated when $p$ blocks.",
          "$p$'s PCB holds $q$'s registers while $p$ is running."
        ],
        correct: 1,
        explanation: "Ch 2 Slides 70–75 Speaker Notes ('Captions'): 'Process p is running. The current state of p is in the CPU, while p’s PCB contains an out-of-date copy. A hardware interrupt transfers control to the OS, which saves the current CPU state in p’s PCB... As q continues running, the saved state in q’s PCB gets out of date.'"
      },
      {
        id: "e5_q4",
        part: "Part A — Rapid-Fire Conceptual Mastery",
        type: "mc",
        points: 5,
        chapter: "Ch 2",
        slideRef: "Ch 2, Slides 88 & 106",
        question: "Which statement correctly defines the **Long-Term**, **Medium-Term**, and **Short-Term** schedulers, the **Dispatcher**, and an **Arbitration Rule**?",
        options: [
          "The Short-Term scheduler swaps processes to disk; the Long-Term scheduler runs every millisecond; an Arbitration Rule dynamically modifies priority numbers.",
          "Long-term scheduler admits jobs from the Job queue (low frequency); Medium-term scheduler suspends/swaps and resumes processes (occasional); Short-term scheduler selects the next Ready process for the CPU (very high frequency); Dispatcher performs the context switch (taking dispatch latency); and an Arbitration Rule (e.g., FIFO, SJF, lowest PID) breaks ties between equal-priority processes without changing their priority values.",
          "The Dispatcher decides which new job is admitted from disk, while the Short-Term scheduler only handles I/O interrupts.",
          "An Arbitration Rule is another name for Priority Aging."
        ],
        correct: 1,
        explanation: "Ch 2 Slide 88 (Schedulers table) & Slide 106 (What Is an Arbitration Rule?): Long-term admits jobs (low freq); Medium-term suspends/resumes (occasional); Short-term selects ready process (very high freq); Dispatcher performs the switch (dispatch latency = time to stop one process and start another). Slide 106: An arbitration rule (FIFO, SJF, lowest PID, RR) breaks ties between equal priorities and does NOT change priority values."
      },
      {
        id: "e5_q5",
        part: "Part A — Rapid-Fire Conceptual Mastery",
        type: "mc",
        points: 5,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slide 106",
        question: "According to the 'Choosing a Synchronization Mechanism' table on Ch 3 Slide 106, which mapping of synchronization need to primitive is optimal?",
        options: [
          "Protect a multi-field shared invariant -> relaxed atomic integer; Wait for a state predicate -> spinlock; Limit concurrent resource users -> condition variable.",
          "Protect a shared invariant -> Mutex / monitor; Limit concurrent resource users -> Counting semaphore (where each permit represents a resource); Wait for a state predicate -> Condition variable with mutex (checked in a `while` loop); Update one independent counter -> Atomic operation (`fetch_add`); Very short kernel-level wait -> Spinlock (when owner can run on another core and release promptly).",
          "Wait for a state predicate -> `sleep(10)` without locks; Limit concurrent resource users -> C `volatile` boolean.",
          "Very short kernel-level wait -> swap process to disk via medium-term scheduler."
        ],
        correct: 1,
        explanation: "Ch 3 Slide 106 table matches those exact 5 pairs: (1) Protect a shared invariant -> Mutex / monitor; (2) Limit concurrent resource users -> Counting semaphore; (3) Wait for a state predicate -> Condition variable with mutex (in a `while` loop); (4) Update one independent value -> Atomic operation; (5) Very short kernel-level wait -> Spinlock where appropriate."
      },
      {
        id: "e5_q6",
        part: "Part B — Comprehensive Multi-Algorithm Scheduling Workout",
        type: "numeric_multi",
        points: 25,
        chapter: "Ch 2",
        slideRef: "Ch 2, Section 2.10 & Project 1",
        question: "Master Scheduling Comparison on One Shared Dataset:\nConsider the following 3 processes (where a **smaller priority number = higher priority**, as in Project 1 & Slide 109):\n• $P_1$: Arrival = $0$, Burst = $5$, Priority = $2$\n• $P_2$: Arrival = $2$, Burst = $3$, Priority = $1$ (highest priority)\n• $P_3$: Arrival = $4$, Burst = $2$, Priority = $3$ (lowest priority)\n\nCompute the exact metrics across **FCFS**, **Non-Preemptive SJF**, **Non-Preemptive Priority**, and **Round Robin ($Q = 2$)** (remember: arrivals at time $t$ join the ready queue before a preempted process at time $t$):",
        fields: [
          { label: "FCFS: P1 Completion Time (CT)", answer: 5 },
          { label: "FCFS: P2 Waiting Time (WT)", answer: 3 },
          { label: "FCFS: P3 Waiting Time (WT)", answer: 4 },
          { label: "Non-Preemptive SJF: P3 Completion Time (CT)", answer: 7 },
          { label: "Non-Preemptive SJF: P2 Completion Time (CT)", answer: 10 },
          { label: "Non-Preemptive Priority (smaller # = higher): P2 Completion Time (CT)", answer: 8 },
          { label: "Round Robin (Q=2): P2 Completion Time (CT)", answer: 9 },
          { label: "Round Robin (Q=2): P3 Completion Time (CT)", answer: 8 },
          { label: "Round Robin (Q=2): P1 Completion Time (CT)", answer: 10 }
        ],
        explanation: "Let's verify each algorithm on P1(0,5,p=2), P2(2,3,p=1), P3(4,2,p=3):\n1. FCFS: 0–5 P1 (CT=5, WT=0) | 5–8 P2 (CT=8, TAT=6, WT=3) | 8–10 P3 (CT=10, TAT=6, WT=4).\n2. Non-Preemptive SJF: P1 starts at 0 and runs 0–5. By t=5, both P2(burst 3) and P3(burst 2) have arrived! P3 has smaller burst (2 < 3), so P3 runs 5–7 (CT=7), then P2 runs 7–10 (CT=10).\n3. Non-Preemptive Priority (smaller # = higher prio): P1 runs 0–5. At t=5, P2 (prio 1) and P3 (prio 3) are ready. P2 has higher priority (1 < 3), so P2 runs 5–8 (CT=8), then P3 runs 8–10 (CT=10).\n4. Round Robin (Q = 2):\n   • 0–2: P1 runs (rem 3). At t=2, P2 arrives and is enqueued BEFORE P1 is re-queued! Queue = [P2, P1].\n   • 2–4: P2 runs (rem 1). At t=4, P3 arrives and is enqueued BEFORE P2 is re-queued! Queue = [P1, P3, P2].\n   • 4–6: P1 runs (rem 1). Queue = [P3, P2, P1].\n   • 6–8: P3 runs 2 units and finishes at t=8 (CT=8)! Queue = [P2, P1].\n   • 8–9: P2 runs 1 unit and finishes at t=9 (CT=9)! Queue = [P1].\n   • 9–10: P1 runs 1 unit and finishes at t=10 (CT=10)!"
      },
      {
        id: "e5_q7",
        part: "Part C — Concurrency Interleaving & Peterson's Trace Workout",
        type: "numeric_multi",
        points: 20,
        chapter: "Ch 3",
        slideRef: "Ch 3, Slides 18–20 & 37–39",
        question: "Shared Counter Interleaving & Peterson's Algorithm Trace:\n• Part 1 (Ch 3 Slides 18–20): Shared `counter` starts at `10`. Thread A and Thread B each execute `r = counter; r = r + 1; counter = r;` once.\n• Part 2 (Peterson's Solution, Ch 3 Slides 37–38): Shared `flag[2] = {false, false}` and `turn = 0`. Thread 0 executes `flag[0] = true; turn = 1;` and then Thread 1 executes `flag[1] = true; turn = 0;`. Both threads then reach their `while (flag[j] && turn == j)` loop.\n\nEnter the exact integer answers:",
        fields: [
          { label: "Part 1: Minimum possible final value of counter after both A and B finish (lost update)", answer: 11 },
          { label: "Part 1: Intended (and mutex-protected) final value of counter after both finish", answer: 12 },
          { label: "Part 2: Value of 'turn' after Thread 0 sets turn=1 and Thread 1 sets turn=0", answer: 0 },
          { label: "Part 2: Which thread (enter 0 or 1) enters the critical section first?", answer: 0 },
          { label: "Part 2: Maximum number of times a waiting thread in Peterson's algorithm can be overtaken before entering", answer: 1 }
        ],
        explanation: "From Ch 3 Slides 18–20 & 37–39:\n• Part 1: If A and B both read `10` before either writes, both compute `11` and write `11` (minimum final value = 11, a lost update). If serialized (or protected by a mutex), the final value is 12.\n• Part 2 (Slide 38 table): Step 1: Thread 0 sets `flag[0] = true`. Step 2: Thread 1 sets `flag[1] = true`. Step 3: Thread 0 sets `turn = 1`. Step 4: Thread 1 sets `turn = 0` (last write to `turn` wins!). Step 5: Thread 0 checks `flag[1] && turn == 1` (which is False since `turn == 0`), so Thread 0 enters the critical section first! Thread 1 checks `flag[0] && turn == 0` (True) and waits until Thread 0 exits and clears `flag[0] = false`. Under Peterson's algorithm, a waiting thread is overtaken at most 1 time."
      },
      {
        id: "e5_q8",
        part: "Part D — Synthesis Free-Response Essay",
        type: "frq",
        points: 30,
        chapter: "Ch 1, Ch 2, Ch 3",
        slideRef: "Ch 1 Slide 66, Ch 2 Slide 150, Ch 3 Slide 21 & 111",
        question: "End-to-End OS Execution Trace (Synthesis of Chapters 1, 2, and 3):\nSuppose a user at a Linux terminal types `./sim` and presses Enter. The program `./sim` creates two POSIX worker threads that increment a shared global counter and write the final result to a file `out.txt`.\nTrace the complete lifecycle of this command across all three chapters:\n1. **Shell & Process Creation (Ch 2.1–2.3)**: How does the shell create and launch `./sim` (`fork`, `execvp`, `waitpid`), and how is `./sim`'s virtual address space organized (Text, Data/BSS, Heap, Stack)?\n2. **Threads & Linux Task Model (Ch 2.5–2.6)**: What happens when `main` calls `pthread_create()` twice (`clone()` flags, private TCB vs. shared process state)?\n3. **Concurrency & Synchronization (Ch 3.1–3.5)**: Why can't the two threads safely run `counter++` without synchronization (even on a single core), and how does `pthread_mutex_lock(&m)` protect the invariant?\n4. **CPU Scheduling & Context Switching (Ch 2.7–2.10)**: If a hardware timer interrupt occurs while Thread 1 is running, trace the 5 interrupt steps, the mode switch vs. context switch distinction, and how the PCB/TCB preserves state.\n5. **System Call & I/O Completion (Ch 1.3–1.5 & 2.2)**: When `main` joins the threads and calls `write(fd, buf, n)` to save `out.txt` to the SSD, trace the wrapper -> trap -> kernel -> device driver -> SSD controller -> blocking/waking transition.",
        rubric: [
          "Shell & Address Space: Explains fork() returning 0 in child and >0 in parent, child calling execvp('./sim', ...) to replace Text/Data/BSS/Heap/Stack while keeping the same PID, and parent calling waitpid().",
          "Threads & clone(): Explains pthread_create invoking Linux clone() with CLONE_VM, CLONE_FILES, CLONE_THREAD; threads share Text, Data/BSS, Heap, and fds, while each has its own PC, registers, and Stack in its TCB.",
          "Concurrency: Explains that counter++ is a 3-step read-modify-write (r=counter; r=r+1; counter=r) that can suffer a lost update via single-core interleaving or multicore parallelism unless protected by a mutex.",
          "Timer Interrupt & Context Switch: Traces (1) HW detects timer, (2) saves PC/state, (3) vectors to timer handler in kernel mode, (4) saves T1 state to PCB/TCB, scheduler picks T2, restores T2 state, (5) resumes T2; distinguishes mode switch (privilege change) from context switch (entity change).",
          "System Call & I/O: Traces glibc write() wrapper (%rax + args + syscall trap) -> kernel validates fd/buffer/permissions -> device driver issues command to SSD hardware controller -> process moves Running -> Waiting/Blocked -> SSD completion interrupt moves process Waiting -> Ready -> dispatcher moves Ready -> Running."
        ],
        sampleAnswer: "1. Shell & Address Space: The shell calls `fork()` to create a child process. In the child (`pid == 0`), `execvp(\"./sim\", args)` loads the executable into memory—initializing the read-only Text segment, Data/BSS segments (initialized and uninitialized globals like `counter`), upward-growing Heap, and downward-growing Stack—while keeping the child's PID. The parent shell calls `waitpid()` and blocks until `./sim` exits.\n2. Threads & Linux Tasks: Calling `pthread_create()` invokes Linux `clone()` with `CLONE_VM | CLONE_FILES | CLONE_THREAD`. Both worker threads share `./sim`'s Text, Data/BSS (`counter`), Heap, and open file descriptors, while each thread has its own private Program Counter, registers, and Stack recorded in its TCB.\n3. Concurrency: Incrementing `counter` requires loading `counter` into a private register `r`, adding 1, and storing `r` back. Even on 1 core, a timer interrupt can interleave the two threads and cause a lost update. Wrapping the increment in `pthread_mutex_lock(&m)` / `pthread_mutex_unlock(&m)` enforces mutual exclusion and memory-ordering visibility.\n4. Timer Interrupt & Context Switch: When the hardware timer expires, (1) hardware detects the interrupt at an instruction boundary, (2) switches to kernel mode (mode switch) and saves the PC and minimal CPU state, (3) uses the interrupt vector to jump to the OS timer handler, (4) if the time quantum expired, performs a context switch by saving Thread 1's registers/PC into its TCB, running the short-term scheduler/dispatcher to select Thread 2, and restoring Thread 2's TCB state, and (5) returns to user mode.\n5. System Call & SSD I/O: After `pthread_join()`, calling `write(fd, buf, n)` invokes the C library wrapper, which places the syscall number in `%rax`, executes `syscall` (synchronous trap into kernel mode), validates `fd` and buffer permissions, and passes the request to the storage device driver. The driver programs the SSD hardware controller and transitions the process from Running to Waiting/Blocked (in the device queue). When the SSD controller finishes the transfer, it raises an asynchronous hardware interrupt; the kernel handler moves the process from Waiting to Ready, and the dispatcher later schedules it from Ready to Running to return the byte count and exit."
      }
    ]
  }
];

window.FLASHCARDS_DATA = [
  // Chapter 1 Flashcards
  { ch: "Ch 1", src: "Slide 6 & 8", q: "What are the two complementary roles/views of an Operating System?", a: "1. Extended / Virtual Machine (provides clean abstractions like files, processes, virtual memory, sockets to hide raw hardware).\n2. Resource Manager / Control Layer (allocates competing resources fairly, enforces protection, coordinates concurrent activity)." },
  { ch: "Ch 1", src: "Slide 8", q: "What is the difference between Mechanism and Policy in an OS?", a: "Mechanism answers 'HOW?' a capability is implemented (e.g., timer hardware, context switch, page table).\nPolicy answers 'WHICH CHOICE?' is made (e.g., which ready process the scheduler picks next)." },
  { ch: "Ch 1", src: "Slide 9", q: "What are the 5 responsibilities that define the OS control surface?", a: "1. Process (create, schedule, synchronize, terminate)\n2. Memory (allocate, protect, map, reclaim)\n3. Storage (name, organize, persist, retrieve)\n4. Devices (control, buffer, cache, abstract)\n5. Security (authenticate, authorize, isolate, audit)" },
  { ch: "Ch 1", src: "Slide 10", q: "Compare Batch, Multiprogramming, Time-Sharing, and Real-Time systems (Primary Goal & Behavior).", a: "• Batch: Goal = Throughput (jobs run in groups with little interaction)\n• Multiprogramming: Goal = CPU Utilization (several jobs kept in RAM so CPU switches on I/O wait)\n• Time-sharing: Goal = Responsiveness (rapid CPU switching via time slices for interactive users)\n• Real-time: Goal = Deadline correctness (results must arrive within timing constraints)" },
  { ch: "Ch 1", src: "Slide 12–15", q: "In multiprogramming without time-sharing, when do two processes' I/O phases overlap?", a: "CPU phases are sequential on 1 CPU (P2 starts CPU as soon as P1 starts I/O). Their I/O phases wait in sequence if there is only 1 shared I/O device (Slide 13: ends at 120), but overlap simultaneously if there are 2 separate I/O devices (Slide 15: ends at 110)." },
  { ch: "Ch 1", src: "Slide 16 Note", q: "[Speaker Note] What are FreeRTOS, VxWorks, and QNX?", a: "• FreeRTOS: Open-source RTOS kernel for microcontrollers/IoT, managed by AWS since 2017.\n• VxWorks: Commercial RTOS by Wind River Systems for mission-critical aerospace, defense, medical, and automotive systems.\n• QNX: Commercial Unix-like microkernel RTOS for embedded systems." },
  { ch: "Ch 1", src: "Slide 20", q: "What file system and kernel architecture do Windows 11, macOS, and Linux use?", a: "• Windows 11: NTFS file system | Windows NT hybrid kernel\n• macOS: APFS file system | XNU hybrid kernel (Mach-influenced)\n• Linux: ext4, Btrfs, or XFS | Monolithic, modular kernel" },
  { ch: "Ch 1", src: "Slide 23 Note", q: "[Speaker Note] Distinguish Physical Device, Device Controller, and Device Driver.", a: "• Physical device: The actual hardware (e.g., SSD flash media).\n• Device controller: HARDWARE on the device that operates it (registers, buffers, signals completion).\n• Device driver: OS SOFTWARE inside the kernel that translates generic OS requests into controller commands." },
  { ch: "Ch 1", src: "Slide 24–25 Note", q: "[Speaker Note] What are the stages of the von Neumann instruction cycle with interrupts?", a: "1. Fetch (read instruction at Program Counter PC)\n2. Decode (control unit interprets instruction)\n3. Execute (ALU/memory performs work)\n4. Write Back / Update (store result & advance PC)\n5. Check Events (at instruction boundary, check if an enabled interrupt is pending)." },
  { ch: "Ch 1", src: "Slide 26", q: "Compare Shared-Memory vs. Distributed-Memory parallel hardware.", a: "• Shared-memory: One common address space, communicates via loads/stores, coordinates via locks & cache coherence, typical scale = multicore/multiprocessor.\n• Distributed-memory: Private memory per node, communicates via messages over an interconnect, typical scale = clusters/cloud/supercomputers." },
  { ch: "Ch 1", src: "Slide 28–30", q: "What are the 4 categories of Privileged Instructions, and what happens if user-mode code attempts one?", a: "1. I/O control (start/configure devices)\n2. Memory control (change page tables or protection)\n3. Interrupt control (enable/disable interrupts)\n4. Processor control (halt CPU or change mode)\nAttempt in user mode -> CPU raises a synchronous hardware exception/trap -> switches to kernel mode -> OS terminates process or returns error." },
  { ch: "Ch 1", src: "Slide 31 Note", q: "[Speaker Note] How does the OS prevent a runaway user program (infinite loop) from keeping a CPU core forever?", a: "Before dispatching the user program, the kernel (in kernel mode) programs a hardware timer (a privileged operation). The timer counts down independently while the user program runs; when it expires, it raises a hardware interrupt that forces the CPU back into kernel mode." },
  { ch: "Ch 1", src: "Slide 35–39", q: "Classify Interrupt, Exception/Fault, and Trap by Origin and Timing (Synchronous vs. Asynchronous).", a: "• Interrupt: External hardware (timer, I/O completion, packet arrival) | Asynchronous (not tied to current instruction, timing varies)\n• Exception / Fault: Current instruction error/condition (divide by 0, page fault, invalid opcode) | Synchronous\n• Trap: Intentional software instruction (syscall, breakpoint) | Synchronous" },
  { ch: "Ch 1", src: "Slide 38", q: "What are the 5 ordered steps of Interrupt Handling?", a: "1. Event: Hardware detects request\n2. Save: Save Program Counter (PC) and minimal CPU state\n3. Vector: Locate handler using the interrupt vector\n4. Handle: Service the cause\n5. Return: Restore state and resume interrupted program" },
  { ch: "Ch 1", src: "Slide 41", q: "What are the 6 categories of System Calls?", a: "1. Process control (fork, exec, exit, wait)\n2. File management (open, read, write, close)\n3. Device management (request, release, control)\n4. Information maintenance (time, PID/UID, attributes)\n5. Communication (pipe, socket, shared memory)\n6. Protection (permissions, credentials)" },
  { ch: "Ch 1", src: "Slide 42–45 Note", q: "[Speaker Note] How do API, C Library Wrapper, and System Call interact during `read(fd, buf, n)`?", a: "The programmer calls the `read()` API/wrapper in `glibc`. The wrapper places the syscall number into `%rax` (on x86-64 Linux) and arguments into registers, then executes `syscall` (trap to kernel mode). The kernel validates `fd`/buffer/permissions and performs I/O. If the kernel returns a negative error, the wrapper sets `errno` and returns `-1`." },
  { ch: "Ch 1", src: "Slide 46", q: "Why is a Mode Switch NOT the same as a Process Context Switch?", a: "• Mode Switch: Changes CPU privilege level (User mode <-> Kernel mode); the SAME process/thread can continue executing.\n• Context Switch: Changes which process/thread is running (Process A -> Process B), saving PCB_A and restoring PCB_B.\nEvery system call causes a mode switch, but NOT necessarily a context switch!" },
  { ch: "Ch 1", src: "Slide 50–56", q: "Compare Monolithic, Layered, Microkernel, Modular, and Hybrid kernel architectures.", a: "• Monolithic (Unix, Linux): All services in kernel space communicating via direct function calls (fast, large TCB, 1 driver crash breaks OS).\n• Layered: Hierarchical layers.\n• Microkernel (MINIX 3, QNX): Only IPC, scheduling, basic memory in kernel; FS/net/drivers in user-space servers via IPC (fault isolation, IPC overhead).\n• Modular (Linux LKM): Dynamically loadable modules in kernel space (flexible, NOT isolated).\n• Hybrid (Windows NT, macOS XNU): Performance-critical code in kernel + microkernel-style isolation/interfaces." },
  { ch: "Ch 1", src: "Slide 60–65", q: "What are the 5 ordered stages of System Boot, and why does the bootloader copy the kernel to RAM?", a: "1. Firmware (BIOS/UEFI in motherboard flash)\n2. Bootloader (GRUB selects & copies kernel + initramfs from storage into RAM because the CPU can only fetch/execute instructions from memory, then jumps to kernel)\n3. Kernel initialization (memory, CPUs/scheduler, devices, mount root `/`)\n4. Initial user-space process (PID 1: `init` or `systemd`)\n5. Login / UI" },

  // Chapter 2 Flashcards
  { ch: "Ch 2", src: "Slide 6–7 Note", q: "What are the 4 memory segments of a process address space (from low to high virtual address) and their growth directions?", a: "1. Text (low address): Read-only executable machine instructions.\n2. Data: Global & static variables (Initialized = Data section; Uninitialized/zero = BSS section).\n3. Heap: Dynamic memory (`malloc`/`new`); grows UPWARD (↑) toward higher addresses.\n4. Stack (high address): Function frames, local variables, return addresses; grows DOWNWARD (↓) toward lower addresses." },
  { ch: "Ch 2", src: "Slide 9 Note", q: "[Speaker Note] What are the 3 standard integer File Descriptors in Unix/Linux?", a: "• `0` — Standard input (`stdin`)\n• `1` — Standard output (`stdout`, normally the screen)\n• `2` — Standard error (`stderr`, for error messages via `perror()`)\n• `3+` — First newly opened file (e.g., `openat()` returning `3`)." },
  { ch: "Ch 2", src: "Slide 12–15", q: "Trace all transitions in the 5-state and 7-state (Suspended) Process Lifecycle.", a: "• New --(admit)--> Ready --(dispatch)--> Running --(exit)--> Terminated\n• Running --(preempt)--> Ready\n• Running --(block)--> Waiting/Blocked --(wake)--> Ready (never directly to Running!)\n• Waiting --(swap out)--> Blocked Suspended --(I/O completes)--> Ready Suspended --(restore to RAM)--> Ready." },
  { ch: "Ch 2", src: "Slide 16–18", q: "What are the 4 categories of data in the PCB, and how does Slide 18 describe the PC vs. CPU registers?", a: "Categories: (1) Identity (PID, PPID, UID), (2) CPU Context (PC, registers, SP, flags), (3) State & Scheduling (state, priority, queue pointers), (4) Memory, I/O & Accounting (page tables, open fds, CPU time).\nSlide 18: 'The program counter is the timestamp [next instruction address], while the other registers preserve the unfinished details of what the process was doing at that moment.'" },
  { ch: "Ch 2", src: "Slide 22, 27–29", q: "What does `fork()` return in the parent vs. child, and what does `execvp()` do?", a: "• `fork()` returns `< 0` on error, `0` in the newly created child process (its actual PID is obtained via `getpid()`), and `> 0` (the child's PID) in the parent.\n• `execvp()` replaces the caller's code, data, heap, and stack with a new program while keeping the SAME PID; it never returns if successful." },
  { ch: "Ch 2", src: "Slide 28 Note", q: "[Speaker Note] Why call `_exit(127)` instead of `exit(127)` if `execvp()` fails in the child, and how does the parent read the status?", a: "`_exit(127)` terminates immediately without flushing copied `stdio` buffers inherited from the parent. `127` means command not found/executable. The parent calls `waitpid(pid, &status, 0)`, checks `if (WIFEXITED(status))`, and extracts the code with `WEXITSTATUS(status)`." },
  { ch: "Ch 2", src: "Slide 33", q: "What is the exact difference between a Zombie process and an Orphan process?", a: "• Zombie: The CHILD is dead (terminated), but its parent is alive and has not yet called `wait()`/`waitpid()` to collect its exit status; retains a small process-table entry.\n• Orphan: The PARENT is dead (terminated first), while the child is still alive; the kernel reparents the child to `init`/`systemd` (PID 1)." },
  { ch: "Ch 2", src: "Slide 39–43", q: "Compare Shared Memory vs. Message Passing and the 4 IPC mechanisms (Pipe, Named Pipe, Signal, Socket).", a: "• Shared Memory: Fast direct loads/stores after setup, requires explicit synchronization.\n• Message Passing: Kernel-mediated, safer isolation, higher syscall/copy overhead.\n• Unnamed Pipe: Related processes (`fd[0]` read, `fd[1]` write), byte stream.\n• Named Pipe (FIFO): Unrelated local processes via filesystem path.\n• Signal: Small async event notice.\n• Socket: Bidirectional local or network endpoint." },
  { ch: "Ch 2", src: "Slide 47–58", q: "What state is private to a thread vs. shared with the process, and what are the 4 multithreading mapping models?", a: "• Private per thread (TCB): PC, registers, Stack.\n• Shared in process: Text, Data, Heap, open files.\n• Models: (1) Many-to-One (user-level: fast, 1 core max, 1 blocking syscall blocks all), (2) One-to-One (kernel-level: true multicore parallelism, higher overhead), (3) Many-to-Many (M user on pool of N kernel threads), (4) Two-Level (M:N + bound threads)." },
  { ch: "Ch 2", src: "Slide 60 Note", q: "[Speaker Note] How does Linux `clone()` unify processes and threads?", a: "Linux treats both processes and threads as schedulable `tasks`. Flags to `clone()`/`clone3()` specify resource sharing: `CLONE_VM` (share address space), `CLONE_FILES` (share open file descriptor table), `CLONE_THREAD` (same thread group)." },
  { ch: "Ch 2", src: "Slide 82–83 Note", q: "[Speaker Note] What is the TLB, and what are the Direct vs. Indirect costs of a context switch?", a: "• Direct cost: Saving/restoring registers, running scheduler/dispatcher, updating memory-management pointers.\n• Indirect cost: Cold CPU caches, pipeline disruption, and TLB flushes.\n• TLB (Translation Lookaside Buffer): Hardware cache in the MMU storing VPN->PFN address translations so virtual memory access doesn't require two RAM accesses." },
  { ch: "Ch 2", src: "Slide 88", q: "Compare the Long-Term, Medium-Term, and Short-Term Schedulers and the Dispatcher.", a: "• Long-Term: Admits jobs from Job queue to Ready (low frequency).\n• Medium-Term: Suspends/swaps processes out and resumes them (occasional).\n• Short-Term: Selects which Ready process runs next on CPU (very high frequency).\n• Dispatcher: Performs the context switch to the selected process (time taken = dispatch latency)." },
  { ch: "Ch 2", src: "Slide 96–98", q: "State the exact formulas for Turnaround Time (TAT), Waiting Time (WT), Response Time (RT), and CPU Utilization.", a: "• Turnaround Time (TAT) = Completion Time (CT) − Arrival Time (AT)\n• Waiting Time (WT) = TAT − Burst Time (BT) [total time spent in Ready queue]\n• Response Time (RT) = First CPU Start Time − AT\n• CPU Utilization = (CPU Busy Time / Total Elapsed Time) × 100%" },
  { ch: "Ch 2", src: "Slide 128–129", q: "What fraction of CPU time is wasted on context switching (cost $S$) under Round Robin (quantum $Q$, avg burst $T$) when $T < Q$ vs. $T \\gg Q$?", a: "• When $T < Q$: Quantum never expires; timing sequence is $T, S, T, S...$ -> Wasted fraction = $S / (T + S)$.\n• When $T \\gg Q$: Each burst $T$ takes many quanta $Q$, each followed by switch $S$ -> Wasted fraction = $S / (Q + S)$." },
  { ch: "Ch 2", src: "Slide 133–142", q: "How does Multilevel Feedback Queue (MLFQ) differ from Multilevel Queue (MLQ)?", a: "• MLQ: Processes are permanently assigned to a fixed queue class.\n• MLFQ: Processes move between queues dynamically based on observed CPU behavior—new jobs start in highest queue $Q_0$; if a job uses its full quantum without finishing, it is demoted to the next lower queue ($Q_1 \\to Q_2 \\to Q_3$); if it waits too long, aging promotes it upward." },
  { ch: "Ch 2", src: "Slide 144–149", q: "Define Processor Affinity (Soft vs. Hard), NUMA, RMS vs. EDF, and Linux CFS vs. EEVDF.", a: "• Processor Affinity: Keeps a task on the same CPU for warm caches (Soft = preferred; Hard = restricted).\n• NUMA: Non-Uniform Memory Access (local node RAM is faster than remote node RAM).\n• RMS vs. EDF: RMS = fixed priority (shorter period -> higher prio); EDF = dynamic priority (nearest deadline first, up to 100% util).\n• Linux CFS vs. EEVDF: CFS picks smallest `vruntime`; EEVDF (Linux 6.6+) checks eligibility (nonnegative lag) and picks earliest virtual deadline." },

  // Chapter 3 Flashcards
  { ch: "Ch 3", src: "Slide 6–7 (3.1 Cutoff)", q: "What is the exact difference between Concurrent Execution and Parallel Execution?", a: "• Concurrent: Two or more tasks make progress during overlapping time periods (can occur on 1 core via interleaved context switching, or on multiple cores).\n• Parallel: Two or more tasks execute instructions at the exact same instant (requires multiple execution cores/resources)." },
  { ch: "Ch 3", src: "Slide 9–11 (3.1 Cutoff)", q: "Why does `r = counter; r = r + 1; counter = r;` cause a lost update when run by two threads, even on 1 core?", a: "`counter` is shared, while each thread has its own register (`rA`, `rB`). If Thread A reads `counter` (0) into `rA` and is preempted before writing back, Thread B reads `counter` (0) into `rB`, computes `1`, and writes `1`; when Thread A resumes, it also writes `1`, losing one increment." },
  { ch: "Ch 3", src: "Slide 13 (3.1 Cutoff)", q: "Define Deadlock, Starvation, and Lost Wakeup as concurrency challenges.", a: "• Deadlock: Tasks wait indefinitely for one another in a cycle (A holds what B needs, B holds what A needs).\n• Starvation: One runnable/waiting task is repeatedly denied CPU time or resource access while others progress.\n• Lost Wakeup: A task misses a wakeup notification because checking a condition and going to sleep were not coordinated atomically." },
  { ch: "Ch 3", src: "Slide 23 & 31", q: "What is the difference between a Race Condition and a Data Race?", a: "• Race Condition: Correctness depends on an uncontrolled ordering of events (can happen even if individual reads/writes are atomic, e.g., check-then-act `if (seats > 0) seats--`).\n• Data Race: Conflicting unsynchronized memory accesses by different threads where at least one writes (causes undefined behavior in C/C++)." },
  { ch: "Ch 3", src: "Slide 27–28", q: "What are the 3 Critical-Section Correctness Requirements?", a: "1. Mutual Exclusion (Safety): At most one thread occupies the critical section at a time.\n2. Progress (Liveness): If the CS is empty and threads want entry, selection cannot be postponed indefinitely and threads in their remainder section cannot block entry.\n3. Bounded Waiting (Liveness): After a thread requests entry, there is a bound on how many times other threads can enter before it." },
  { ch: "Ch 3", src: "Slide 34–41", q: "Why does Strict Alternation (`turn`) fail Progress, and how does Peterson's Solution fix it?", a: "Strict alternation forces `turn` to alternate (`0, 1, 0, 1`), so if Thread 1 stays in its remainder section, Thread 0 cannot enter an empty CS twice in a row (violating Progress). Peterson's adds `flag[2]` (interest) to `turn` (tie-breaker): `flag[i] = true; turn = j; while (flag[j] && turn == j);`, waiting ONLY if the other thread is ALSO interested." },
  { ch: "Ch 3", src: "Slide 47–53", q: "How do `test_and_set` and `CAS` implement spinlocks, and what must be combined with them for a complete lock?", a: "• `test_and_set(&L)` atomically sets `L = true` and returns the old value (caller acquires lock when old value == `false`).\n• `CAS(&L, 0, 1)` atomically sets `L = 1` only if `L == 0` and returns the old value.\n• A complete lock requires atomic ownership + acquire/release memory barriers + a waiting/fairness policy (simple spinlocks lack bounded waiting)." },
  { ch: "Ch 3", src: "Slide 59–67", q: "Compare Mutex, Binary Semaphore, and Counting Semaphore, and state semaphore initial values.", a: "• Mutex: Locked/unlocked with strict OWNERSHIP (only the locking thread may unlock it).\n• Binary Semaphore: Permit count 0 or 1; no owner requirement (can signal from another thread for event ordering).\n• Counting Semaphore: Tracks $N$ available resource permits.\n• Init values: Mutual exclusion = `1`; Pool of $K$ resources = `K`; Wait for completion event = `0`." },
  { ch: "Ch 3", src: "Slide 70–74", q: "Compare a Condition Variable with a Semaphore, and explain Mesa vs. Hoare monitors.", a: "• Condition Variable (`wait(cv, m)`): Atomically releases mutex `m` and sleeps, then reacquires `m` before returning; `signal(cv)` with no waiter is NOT stored (state lives in the predicate).\n• Mesa monitor (POSIX): Signaler keeps running; waiter only becomes eligible, so another thread can run first and change the predicate -> MUST recheck predicate in a `while` loop!\n• Hoare monitor: Immediate handoff to awakened waiter." },
  { ch: "Ch 3", src: "Slide 80–92", q: "Summarize the key synchronization rules for Bounded Buffer, Readers–Writers, and Dining Philosophers.", a: "• Bounded Buffer: `empty=N, full=0, mutex=1`. Always `wait(empty)`/`wait(full)` BEFORE `wait(mutex)` to avoid deadlock!\n• Readers–Writers: First reader (`readers==1`) calls `wait(room)`; last reader (`readers==0`) calls `signal(room)` (`room` is a semaphore, not an owner mutex).\n• Dining Philosophers: Break circular wait via (1) global fork ordering (lower index first), (2) max 4 philosophers at table, or (3) central monitor." },
  { ch: "Ch 3", src: "Slide 105", q: "State Amdahl's Law and calculate the speedup for serial fraction $s = 0.20$ on $p = 4$ cores and as $p \\to \\infty$.", a: "Formula: $\\text{Speedup} \\le \\frac{1}{s + \\frac{1 - s}{p}}$.\nFor $s = 0.20, p = 4$: $\\text{Speedup} = \\frac{1}{0.20 + 0.80/4} = \\frac{1}{0.40} = 2.5\\times$.\nAs $p \\to \\infty$: Maximum speedup approaches $\\frac{1}{s} = \\frac{1}{0.20} = 5\\times$." }
];
