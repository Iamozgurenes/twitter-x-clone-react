import { Link } from "react-router-dom";
import { numberFormat } from "~/utils/formats";

export default function Topic({item}) {
    return (
        <Link to="/" className="py-6 px-4 transition-colors hover:bg-white/[0.03]">
            <div className="text-[13px] text-[#71767b] leading-4">  {item.title}  </div>
            <div className="">
                {item.topic.type === 'tag' && '#'} {item.topic.value}
            </div>
            {item?.postCount && (
                <div className="text-[13px] text-[#71767b] mt-1 leading-4">
                    {numberFormat(item.postCount)} posts
                </div>
            )}
        </Link>
    )
}
