const nextConfig = {
  webpack: (config, { isServer }) => {
    // 필요한 웹팩 설정을 추가 또는 수정합니다.
    // 예: 로더, 플러그인 등 설정

    if (!isServer) {
      // 클라이언트 측 웹팩 설정
    }

    return config;
  },
};

module.exports = nextConfig;