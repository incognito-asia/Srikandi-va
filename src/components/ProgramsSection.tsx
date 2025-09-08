const programs = [
  { title: "Sales Support", items: ["Lead research and prospecting", "Client outreach", "CRM management and data entry", "Follow-ups and appointment scheduling"] },
  { title: "Executive Assistant", items: ["Calendar and email management", "Travel planning and meeting coordination", "Document preparation and report creation", "Personal task assistance"] },
  { title: "Marketing Admin", items: ["Social media content scheduling", "Email marketing and campaign support", "Market research and competitor analysis"] },
  { title: "E-Commerce Admin", items: ["Product listing and optimization", "Order processing and customer service", "Inventory and supplier coordination", "Review management and reporting"] },
  { title: "General & Personal Admin", items: ["Data entry and file management", "Research and report preparation", "Personal scheduling and reminders", "Inbox management and correspondence"] },
  { title: "Product Sourcing", items: ["Identifying and vetting suppliers", "Price and contract negotiation", "Sample ordering and quality checks", "Managing orders and logistics"] },
];

export function ProgramsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="w-full lg:container lg:mx-auto md:container md:mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Kolom Teks Kiri */}
          <div className="space-y-4">
            <div className="inline-block rounded-xl border border-[#A11692] bg-transparent px-3 py-1 text-center font-suwargi text-[16px] text-[#A11692]">
              Program kami
            </div>
            <h2 className=" font-normal sm:text-3xl 2xl:text-4xl xl:text-[36px]">
              <span className="font-bold">Sekecil Apapun</span> <span className="font-suwargi text-[#F45866]">Tugasnya </span>
              <span className="font-bold">Dapat Memberi </span>
              <span className="font-suwargi text-[#F45866]">Manfaat yang</span> <span className="font-suwargi text-[#F45866]">Besar</span>
            </h2>
            <p className="max-w-[600px] font-light ">
               Meningkatkan produktivitasmu dengan mengerjakan tugas yang tidak memiliki prioritas tinggi namun memerlukan waktu untuk mengerjakannya.
            </p>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {programs.map((program) => (
              <div key={program.title} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-[#A11692]">
                <h3 className="text-xl">{program.title}</h3>
                <ul className="mt-4 mb-[40px] space-y-2 text-sm underline underline-offset-8 dark:text-[#A11692]">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2 mt-1 block h-1.5 w-1.5 rounded-full bg-[#A11692]" />
                      <span className="mb-4 text-[#7F7E7E]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}