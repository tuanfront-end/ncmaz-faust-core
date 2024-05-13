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
}: {
	data: unknown[];
	clientId: string;
	type: "ncmazfc-preview-posts-block" | "ncmazfc-preview-terms-block";
}) {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [front_uri, setFrontUri] = useState<string>("http://localhost:3000/");
	const [iframeHeight, setIframeHeight] = useState<number>();

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		const frontend_uri = window.ncmazfc_frontend_uri?.frontend_uri || "";
		!!frontend_uri && setFrontUri(frontend_uri.replace(/\/$/, ""));
	}, []);

	useEffect(() => {
		const iframe = iframeRef.current;
		if (!iframe || !front_uri || !clientId) {
			return;
		}

		iframe.onload = () => {
			setTimeout(() => {
				iframeRef?.current?.contentWindow?.postMessage(
					{ data, type, clientId },
					front_uri,
				);
			}, 200);
		};
	}, [iframeRef, data, front_uri, clientId, type]);

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
