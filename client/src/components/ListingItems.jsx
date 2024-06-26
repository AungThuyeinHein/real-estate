/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";

export default function ListingItems({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[250px]">
      <Link to={`listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkit8.net%2Fillustrations%2Frealestate%2F&psig=AOvVaw0dDjgsiI46hD66hKmK1nce&ust=1718197248018000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjF5trN04YDFQAAAAAdAAAAABAK"
          }
          alt="listing cover"
          className="h-[220px] sm:h-[120px] w-full object-cover hover:scale-105 transform transition-transform duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-700 line-clamp-4">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " /month"}
          </p>
          <div className="text-slate-700 flex items-center gap-2">
            <FaBed className="h-4 w-4 text-green-700" />
            <div className="font-bold text-xs">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : `${listing.bedrooms} Bedroom`}
            </div>
            <FaBath className="h-4 w-4 text-green-700" />
            <div className="font-bold text-xs">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : `${listing.bathrooms} Bathroom`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
