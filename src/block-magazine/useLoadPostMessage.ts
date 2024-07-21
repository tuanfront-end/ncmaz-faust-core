import { useEffect, useRef, useState } from "@wordpress/element";

declare global {
	var ncmazfc_frontend_uri: {
		frontend_uri: string | undefined;
	};
}

export default function useLoadPostMessage({
	data,
	clientId,
	type = "ncmazfc-preview-posts-block",
	blockVariation,
}: {
	blockVariation: string;
	data: unknown[];
	clientId: string;
	type: "ncmazfc-preview-posts-block" | "ncmazfc-preview-terms-block";
}) {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [front_uri, setFrontUri] = useState<string>("");
	const [iframeHeight, setIframeHeight] = useState<number>();
	const [iframeOnloaded, setIframeOnloaded] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		const frontend_uri = window.ncmazfc_frontend_uri?.frontend_uri || "";
		if (frontend_uri.startsWith("http")) {
			setFrontUri(frontend_uri.replace(/\/$/, ""));
		}
	}, []);

	useEffect(() => {
		if (typeof window === "undefined" || iframeOnloaded) {
			return;
		}

		const iframe = iframeRef.current;
		if (!iframe || !front_uri) {
			return;
		}

		iframe.onload = () => {
			setTimeout(() => {
				setIframeOnloaded(true);
			}, 10);
		};
	}, [iframeOnloaded, iframeRef, front_uri]);

	useEffect(() => {
		const iframe = iframeRef.current;

		if (!iframe || !front_uri || !clientId || !iframeOnloaded) {
			return;
		}

		if (iframeOnloaded) {
			console.log("iframe.onload_____", { blockVariation, data, type });
			setTimeout(() => {
				iframeRef?.current?.contentWindow?.postMessage(
					{ data, type, clientId, blockVariation },
					front_uri,
				);
			}, 200);
		}
	}, [
		iframeRef,
		data,
		front_uri,
		clientId,
		type,
		blockVariation,
		iframeOnloaded,
	]);

	useEffect(() => {
		if (typeof window === "undefined" || !front_uri || !clientId) {
			return;
		}

		window.addEventListener("message", (event) => {
			if (
				!event.origin.includes(front_uri) &&
				!front_uri.includes(event.origin)
			) {
				return;
			}
			if (
				event.data.type !== "ncmaz-preview-iframe-height" ||
				event.data.clientId !== clientId
			) {
				return;
			}

			if (event.data.height) {
				setIframeHeight(event.data.height);
			}
		});
	}, [front_uri, clientId]);

	return {
		iframeRef,
		front_uri,
		iframeHeight,
	};
}
