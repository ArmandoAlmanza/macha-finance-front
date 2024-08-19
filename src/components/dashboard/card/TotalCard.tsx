import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const TotalCard = () => {
    const money = {
        currency: "MXN",
        amount: 25000.0,
        income: 30000.0,
        expend: 5000.0,
    };

    const newCurrency = {
        amount: money.amount.toLocaleString("es-MX", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }),
        income: money.income.toLocaleString("es-MX", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }),
        expend: money.expend.toLocaleString("es-MX", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }),
    };
    return (
        <article className="bg-card-pattern bg-center bg-cover text-white p-5 rounded-2xl grid gap-4">
            <h2 className="text-center text-[25px] font-secundary font-semibold">
                Total Amount
            </h2>
            <main className="flex gap-2 mx-auto items-center">
                <span className="font-semibold text-[25px] font-secundary">
                    {money.currency}
                </span>
                <h1 className="font-bold text-[30px]">${newCurrency.amount}</h1>
            </main>
            <footer className="bg-[#231E7C] grid grid-cols-3 rounded-xl px-5 py-2 items-center">
                <div className="grid items-center">
                    <div className="flex items-center gap-3">
                        <FaArrowUp className="text-[#1BAA04]" />
                        <span className="text-[#A8A8A8] text-[15px] font-secundary">
                            Income
                        </span>
                    </div>
                    <p className="text-[15px] text-center">
                        {newCurrency.income}
                    </p>
                </div>
                <div className="h-[35px] bg-[#8C89FE] w-[3px] mx-auto"></div>
                <div className="grid items-center">
                    <div className="flex items-center gap-3">
                        <FaArrowDown className="text-[#F20000]" />
                        <span className="text-[#A8A8A8] text-[15px] font-secundary">
                            Expend
                        </span>
                    </div>
                    <p className="text-[15px] text-center">
                        {newCurrency.expend}
                    </p>
                </div>
            </footer>
        </article>
    );
};

export default TotalCard;
