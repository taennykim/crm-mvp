# AWS Plan

## 1. Objective

- 보험 CS용 AI Agent CRM MVP를 AWS 환경에서 실행할 수 있도록 최소 구성으로 준비한다.
- 권한, 네트워크, 방화벽 변경은 MVP에 필요한 범위로 제한한다.

## 2. Principles

- 최소 권한 원칙 적용
- 최소 리소스만 사용
- 최소 네트워크 오픈
- 변경 전 승인
- 변경 후 Daily 기록

## 3. Scope

### Included

- 현재 AWS 실행 환경 확인
- 필요한 컴퓨팅 환경 결정
- 애플리케이션 실행 방식 정의
- 최소 보안그룹/포트 정책 검토

### Excluded

- 대규모 인프라 구성
- 복잡한 멀티 계정 구조
- 운영 환경 수준의 보안 고도화
- 불필요한 외부 노출

## 4. Step-by-Step Plan

### Step 1. Current Environment Check

- 현재 사용 중인 AWS 환경 확인
- 접근 가능한 리소스 확인
- 배포 또는 실행 가능한 경로 확인

### Step 2. Runtime Decision

- EC2, 컨테이너, 정적 호스팅 중 MVP에 적합한 방식 선택
- 가장 단순한 실행 구조 우선

### Step 3. Security Review

- 필요한 포트만 확인
- 불필요한 인바운드 차단
- 네트워크 접근 최소화

### Step 4. Deployment Preparation

- 코드 실행 위치 확정
- 환경 변수 필요 여부 정리
- LLM 연결이 있다면 API 접근 범위 검토

### Step 5. Verification

- 애플리케이션 정상 실행 확인
- 외부 접근 범위 확인
- 승인 범위 이상 변경이 없는지 재확인

## 5. Approval Required

- 신규 AWS 리소스 생성
- 보안그룹 변경
- 포트 오픈
- 외부 API 접근 허용
- IAM 권한 변경

## 6. Checklist

- 현재 AWS 환경 확인
- 실행 방식 결정
- 최소 보안 설정 확인
- 승인 필요 항목 정리
- Daily 기록 반영

## 7. Next Step

1. 로컬 기준 AWS CLI 설치 여부, 환경 변수, 자격 증명 파일 존재 여부를 먼저 확인한다.
2. 로컬 확인만으로 부족하면 실제 AWS API 조회 필요 여부를 판단한다.
3. 실제 AWS API 조회나 리소스 변경이 필요하면 승인 범위를 먼저 기록한다.
4. MVP 실행 방식 후보를 정리한다.
5. 승인 필요한 인프라 변경 항목을 분리한다.

## 8. Current Check Result - 2026-03-20

- AWS CLI binary exists: `/usr/local/bin/aws`
- AWS CLI version confirmed: `aws-cli/2.33.18`
- local `~/.aws` directory not found
- local AWS-related environment variables not found
- direct metadata endpoint access was not available from the checked shell path
- AWS STS identity check succeeded from the user shell
- AWS CLI credential source confirmed as `iam-role`
- AWS region confirmed as `ap-northeast-2`
- S3 bucket listing succeeded from the user shell
- IMDSv2 token flow succeeded from the user shell

확인된 AWS identity:

- Account: `580075786326`
- ARN: `arn:aws:sts::580075786326:assumed-role/terraform-poc-iac-role/i-0279082dd48ce62d2`
- Role: `terraform-poc-iac-role`
- Session type: assumed role on EC2 instance
- Instance ID: `i-0279082dd48ce62d2`
- Instance profile ARN: `arn:aws:iam::580075786326:instance-profile/terraform-poc-iac-role`

확인된 접근 특성:

- credential source: IMDS / instance role
- region source: IMDS
- S3 `ListBuckets` access: confirmed
- EC2 read scope: not yet confirmed from CLI result

확인된 S3 buckets:

- `aws-athena-query-results-ap-northeast-2-580075786326`
- `aws-cloudtrail-logs-580075786326-2c15fddd`
- `aws-saas-an2-vpc-001-flow-log-580075786326`
- `do-not-delete-ssm-diagnosis-580075786326-ap-northeast-2-lkf95`
- `llm-portal-artifacts-580075786326-1773976148`
- `s3-helm-jhun-mgmt-dev-kr`
- `s3-tfstate-jhun80-mgmt-dev-kr`
- `vllm-mvp-model`

현재까지 확인 기준:

- 현재 작업 환경은 AWS 계정 `580075786326` 의 assumed role 세션으로 실행 중이다.
- 로컬 credential 파일 없이도 인스턴스 또는 런타임 역할 기반 접근이 가능한 상태로 보인다.
- S3 조회 권한은 확인되었고, 다른 서비스의 읽기 범위는 추가 AWS API 조회로 확인해야 한다.
- 리소스 변경 작업 전에는 최소 권한 원칙과 승인 절차를 유지한다.
