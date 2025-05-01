const Footer = () => {
  return (
    <footer className="text-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-start items-start gap-14">
          <div className="md:w-1/3 space-y-4">
            {/* logo */}
            <div className="flex items-center gap-2">
              <div className="size-12 rounded-full bg-slate-300">
                <img src="/FoladLogo.png" alt="" />
              </div>
              <h4 className="text-3xl font-bold">Folad sazan</h4>
            </div>
            {/* desc */}
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ullam quia quisquam deserunt minima quaerat error exercitationem
              veniam, architecto sequi nesciunt ad praesentium dolorem saepe ab
              rerum, assumenda modi excepturi?
            </div>
          </div>

          {/* Product Column */}
          <div className="min-w-[160px]">
            <h3 className="text-gray-200 text-2xl font-bold ">Product</h3>
            <ul className="space-y-3 my-2 text-sm">
              {["Pricing", "Overview", "Browse", "Accessibility"].map(
                (item) => (
                  <li key={item}>
                    <h4 className="hover:text-gray-300 cursor-pointer text-lg">
                      {item}
                    </h4>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-sm text-gray-500">
            © ureach @ 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
