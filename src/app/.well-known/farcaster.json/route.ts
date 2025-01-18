import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiYmFzZXd0Zi1wdWxzZWZpdmUudmVyY2VsLmFwcCJ9",
      signature: "MHgzODU1NDBmMDU2ZDJkODM0NWJiZTA2NmU0ODgwYWY0ZDE3NjZjNGIwODUyNDc2Nzc4MDczN2NhNjc4NDU2ZGEyMTdhYTliYTAxNGI2MjM3NDY5NDEwZmI2MzA3ZDAwOGQ2NjUyNjBhZjcyYmQwNWJkOGY2MzkwYzQ3MGZhMjUwOTFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
