import React, { FC, ImgHTMLAttributes } from "react";

export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	containerClassName?: string;
	fill?: boolean;
}

const NcImage: FC<NcImageProps> = ({
	containerClassName = "",
	alt = "nc-imgs",
	className = "object-cover w-full h-full",
	loading = "lazy",
	src,
	sizes,
	fill = false,
	...args
}) => {
	const renderLoadingPlaceholder = () => {
		return (
			<div
				className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`}
			>
				<div
					className={` ${
						fill ? "absolute inset-0 w-full h-full" : ""
					} ${className} bg-slate-100`}
				></div>
			</div>
		);
	};

	return (
		<div
			className={`nc-NcImage ${
				fill ? "absolute inset-0" : ""
			} ${containerClassName}`}
			data-nc-id="NcImage"
		>
			{!!src && src.includes("http") ? (
				<img
					src={src}
					alt={alt}
					className={` ${
						fill ? "absolute inset-0 w-full h-full" : ""
					} ${className}`}
					loading={loading}
					{...args}
					// srcSet="http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732.jpg 960w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-240x300.jpg 240w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-819x1024.jpg 819w, http://localhost/wordpress-1/wp-content/uploads/2022/09/1650732-768x960.jpg 768w"
				></img>
			) : (
				renderLoadingPlaceholder()
			)}
		</div>
	);
};

export default NcImage;
