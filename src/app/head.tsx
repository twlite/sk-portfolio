import * as config from '@/utils/config';

export default function Head() {
  return (
    <>
      <title>{config.fullName}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={config.websiteDescription} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
