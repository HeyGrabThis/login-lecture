const { createLogger, transports, format } = require('winston');
const { combine, label, colorize, timestamp, printf, simple } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
  //포맷도 파일이랑 콘솔 나누어서
  file: combine(
    label({
      label: '백엔드 맛보기',
    }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:dd',
    }),
    printFormat
  ),
  console: combine(colorize(), simple()),
};

// 파일로 기록할지 콘솔로 기록할지 오브젝트로 따로 빼주기
const opts = {
  //파일로 기록
  file: new transports.File({
    filename: 'access.log',
    dirname: './logs',
    level: 'info',
    format: printLogFormat.file,
  }),
  //콘솔로 기록 => 개발중일 때
  console: new transports.Console({
    level: 'info',
    format: printLogFormat.console,
  }),
};

//winston로그 세팅
const logger = createLogger({
  transports: [opts.file],
});

//개발상황일 때만 콘솔로 기록하는 기능 켜기
if (process.env.NODE_ENV !== 'production') {
  logger.add(opts.console);
}

module.exports = logger;
